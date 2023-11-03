import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { primaryBlack, secondaryBlack, styles, thinText } from "./src/style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNew from "./src/screens/AddNew";
import BookInfo from "./src/screens/BookInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: secondaryBlack,
          background: primaryBlack,
          card: primaryBlack,
          border: "default",
          notification: "default",
          text: "#FFF",
        },
      }}
    >
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="AddNew"
          component={AddNew}
          options={{ headerTitleAlign: "center", headerTitle: "Add New Book" }}
        />
        <Stack.Screen
          name="BookInfo"
          component={BookInfo}
          options={{ headerTitleAlign: "center", headerTitle: "Reading" }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
