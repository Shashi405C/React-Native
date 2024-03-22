import React from "react";
import {
  View,
  Image,
  ImageBackground,
  Pressable,
  Button,
  Text,
} from "react-native";

export default function Press() {
  return (
    <>
      <ImageBackground
        source={{
          uri: "https://4kwallpapers.com/images/walls/thumbs/15387.png",
        }}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Pressable onPress={() => console.log("victoria  is pressed")}>
            <Image
              style={{ width: 200, height: 200, borderRadius: 360 }}
              source={{
                uri: "https://4kwallpapers.com/images/walls/thumbs/13346.jpg",
              }}
            />
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 40,
            width: 100,
            paddingHorizontal: 10,
            marginLeft: 150,
          }}
        >
          <Button
            title="Click"
            onPress={() => console.log("\n\t btn is clicking \n")}
          ></Button>
        </View>
      </ImageBackground>
    </>
  );
}
