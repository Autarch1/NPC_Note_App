import { FC } from "react";
import { TextInput, View } from "react-native";


type NoteSearchProps = {
    handelSearch : (searchNote: string) => void;
}


const NoteSearch: FC<NoteSearchProps> = ({ handelSearch }) => {
    return (
        <View>
            <TextInput placeholder="Search Any Note You Have Written"
                onChangeText={(searchNote) => handelSearch(searchNote)}
                style={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 15,
                    color: 'white',                    
                }}
            />
        </View>
    )
}

export default NoteSearch;