import react from "react-native";

import { View, BackgroundClor, Pressable, Text, Image } from "react-native";

export default function Ip() {
  return (
    <View style={{ flex: 1, backgroundcolor: "plum", padding: 60 }}>
      <Pressable onPress={() => console.log("Rita is good")}>
        <Image
          source={{
            uri: "https://4kwallpapers.com/images/walls/thumbs/13401.jpg",
          }}
          style={{ width: 200, height: 200, borderRadius: 360 }}
        />
      </Pressable>
    </View>
  );
}
