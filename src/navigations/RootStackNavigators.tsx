import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import HomeScreen from "../screens/HomeScreen";
import SelectedNoteScreen from "@/screens/SelectedNoteScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigators = () => {
    return (
        <Stack.Navigator 
            initialRouteName="HomeScreen"
            screenOptions={{headerShown : false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SelectedNoteScreen" component={SelectedNoteScreen} />
        </Stack.Navigator>
    )
}