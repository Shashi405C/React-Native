import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("../assets/s.png");
const rocket = require("../assets/h.png");
import sun from "../images/r.png";

export default function Imageas() {
  return (
    <ImageBackground
      source={{
        uri: "https://4kwallpapers.com/images/walls/thumbs_3t/13559.png",
      }}
      style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, padding: 60 }}>
        {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}
        {/* <Image source={rocket} style={{ width: 200, height: 200 }} /> */}
        <Image source={sun} style={{ width: 200, height: 200 }} />
        <Image
          source={{
            uri: "https://4kwallpapers.com/images/walls/thumbs_3t/15789.jpg",
          }}
          style={{ width: 200, height: 200 }}
        />

        <Image
          source={{
            uri: "https://4kwallpapers.com/images/walls/thumbs_2t/15476.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
      </View>
    </ImageBackground>
  );
}
