import { FC, useState } from "react";
import { RootStackScreenProps } from "navigations/type";
import { useNavigation } from '@react-navigation/native';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Note from '../../server/note.json'
import NoteSearch from "../components/NoteSearch";
import { useAppDispatch } from "@/hooks/hook";
import { addNoteData } from "@/features/notes/noteSlice";
type RenderItem = {
    item: {
        id: number,
        title: string,
        note: string,
    };

    itemWidth: number;
};

type Props = RootStackScreenProps<'HomeScreen'>;

type Navigation = Props['navigation'];

const NoteListItem: FC<RenderItem & { itemWidth: number }> = ({ item, itemWidth }) => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<Navigation>();

const handelSelectedNote = () => {
  const { id, title, note } = item;
  dispatch(addNoteData({ id : id, title: title, note: note }));
  console.log("title is "+ title);
  
  return navigation.navigate('SelectedNoteScreen', { selectedNoteId: id });
};


  return (
    <TouchableOpacity style={{ width: itemWidth, margin: 8 }} onPress={handelSelectedNote}>
      <View style={[styles.container, {height : itemWidth * 1}]}>
        <View style={styles.title_header}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.body_header}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.body}>{item.note}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const { width } = Dimensions.get('window');
  const itemWidth = (width - 32) / 2; 

  const { notes } = Note;
  const [filterNotes, setFilterNotes] = useState(notes);

  const handleSearch = (searchNote: string) => {
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(searchNote.toLowerCase())
    );
    setFilterNotes(filtered);
  };

  return (
    <>
      <NoteSearch handelSearch={handleSearch} />
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ backgroundColor: "white" }}
          data={filterNotes}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Set the number of columns to 2
          renderItem={({ item }) => <NoteListItem item={item} itemWidth={itemWidth} />}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 16 }} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  title_header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
  },
  body_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
    marginHorizontal: 10,
    gap: 10,
  },
  body: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default HomeScreen;
