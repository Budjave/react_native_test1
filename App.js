import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import FlexBoxScreen from "./screens/FlexBoxScreen";
import Register from "./screens/Register";
import FlexExercise from "./screens/FlexExercise";
import FlatListScrenn from "./screens/FlatListScrenn";

const Stack = createNativeStackNavigator();

export default function App() {
  const btnClick = () => Alert.alert("aaa");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="FlexBox" component={FlexBoxScreen} />
        <Stack.Screen name="Flex" component={FlexExercise} />
        <Stack.Screen name="FlatList" component={FlatListScrenn} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //     <Text style={{ color: "green" }}>hi</Text>
    //     <TouchableOpacity style={styles.myBtn} onPress={btnClick}>
    //       <Text>Click</Text>
    //     </TouchableOpacity>
    //     <Text>hi</Text>
    //     <Text style={styles.textStyle}>hi</Text>

    //     <Button title="Button" onPress={() => Alert.alert("daragdlaa")} />
    //     <Button title="Click" onPress={btnClick} />
    //     <Image
    //       source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       style={styles.img}
    //     />
    //     <Image source={require("./assets/favicon.png")} style={styles.img} />
    //   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    fontSize: 30,
    color: "red",
  },

  myBtn: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "#f4f4f4",
  },
  img: {
    width: 50,
    height: 50,
  },
});
