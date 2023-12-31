import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
    HomeScreen: undefined;
    SelectedNoteScreen: {
        selectedNoteId: number;
    }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;