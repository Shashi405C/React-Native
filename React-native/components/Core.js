import React from "react";
import { View } from "react-native";

export default function Core() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center", // Corrected property name
        height: "100%",
        paddingHorizontal: 100,
      }}
    >
      <View
        style={{
          width: 200,
          height: 200,
          justifyContent: "center",
          alignItems: "center", // Corrected property name
          borderWidth: 2,
          borderColor: "black",
          borderRadius: 100, // Half of width or height for perfect circle
          backgroundColor: "lightblue",
          elevation: 25,
          shadowOpacity: 0.5,
          shadowColor: "blue",
        }}
      ></View>
    </View>
  );
}
