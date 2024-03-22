import React from "react";
import { useState } from "react";
import {
  View,
  Button,
  backgroundcolor,
  Image,
  Pressable,
  Modal,
  StatusBar,
} from "react-native";

export default function Ma() {
  const [isvisable, setIsVisable] = useState(false);

  return (
    <View style={{ flex: 1, backgroundcolor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="light-content" hidden />
      <Button
        title="press"
        onPress={() => {
          setIsVisable(true);
          console.log("Button pressed");
        }}
        color="midnightblue"
      />
      <Modal visible={isvisable} animationType="slide">
        <View style={{ flex: 1, backgroundcolor: "plum", padding: 60 }}>
          <Pressable onPress={() => console.log("Rita is good")}>
            <Image
              source={{
                uri: "https://4kwallpapers.com/images/walls/thumbs/13401.jpg",
              }}
              style={{ width: 200, height: 200, borderRadius: 360 }}
            />
          </Pressable>

          <Button
            title="back"
            color="midnightblue"
            onPress={() => {
              setIsVisable(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
}
