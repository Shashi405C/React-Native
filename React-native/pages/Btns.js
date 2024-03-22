import React from "react";
import { View, Button, Image, ImageBackground } from "react-native";

export default function Btns() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="press"
        onPress={() => console.log("Button pressed")}
        color="midnightblue"
      />
    </View>
  );
}
