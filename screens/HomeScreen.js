import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Flex" onPress={() => navigation.navigate("FlexBox")} />
      <Button title="Flex Exercise" onPress={() => navigation.navigate("Flex")} />
    </View>
  );
};

export default HomeScreen;
