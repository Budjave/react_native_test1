import { View, Text } from "react-native";
import React from "react";

const FlexBoxScreen = () => {
  return (
    <View
      style={{ backgroundColor: "yellow", flex: 1, flexDirection: "column" }}
    >
      <View
        style={{ backgroundColor: "yellow", flex: 1, flexDirection: "row" }}
      >
        <View style={{ backgroundColor: "aqua", flex: 1 }}></View>
        <View style={{ backgroundColor: "orange", flex: 2 }}></View>
        <View style={{ backgroundColor: "brown", flex: 4, }}>
          <View style={{ backgroundColor: "black", flex: 1 }}></View>
          <View style={{ backgroundColor: "violet", flex: 2 }}></View>
          <View style={{ backgroundColor: "darkblue", flex: 4 }}></View>
        </View>
      </View>
      <View
        style={{ backgroundColor: "yellow", flex: 3, flexDirection: "column" }}
      >
        <View style={{ backgroundColor: "blue", flex: 1 }}></View>
        <View style={{ backgroundColor: "coral", flex: 2 }}></View>
        <View style={{ backgroundColor: "firebrick", flex: 4 }}></View>
      </View>
    </View>
  );
};

export default FlexBoxScreen;
