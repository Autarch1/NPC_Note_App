import React, { FC, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { RootStackScreenProps } from "@/navigations/type";
import { resetState } from "@/features/notes/noteSlice";

interface Props extends RootStackScreenProps<"SelectedNoteScreen"> {}

const SelectedNoteScreen: FC<Props> = ({ route, navigation }) => {
  const dispatch = useAppDispatch();
  const { selectedNoteId } = route.params;
  
  const noteList = useAppSelector((state) => state.note.noteList);

  const selectedNote = noteList.find((note) => note.id === selectedNoteId);

  const handleReset = () => {
    dispatch(resetState());
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TextInput style={styles.title}>{selectedNote?.title}</TextInput>
      </View>
      <View style={styles.noteContainer}>
        <TextInput style={styles.note}>{selectedNote?.note}</TextInput>
      </View>
      <TouchableOpacity onPress={handleReset} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  noteContainer: {
    marginBottom: 16,
  },
  note: {
    fontSize: 16,
  },
  backButton: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SelectedNoteScreen;
