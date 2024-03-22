import { View, Text, Image, ImageBackground, ScrollView } from "react-native";

export default function Scrols() {
  return (
    <ImageBackground
      source={{
        uri: "https://4kwallpapers.com/images/walls/thumbs_v/15788.jpg",
      }}
      style={{
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        }}
      >
        <Image
          source={{
            uri: "https://4kwallpapers.com/images/walls/thumbs_3t/15835.jpg",
          }}
          style={{ width: 200, height: 200, borderRadius: 360 }}
        />
        <ScrollView>
          <Text
            style={{
              color: "white",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              fontSize: 30,
            }}
          >
            Tech company Cognition introduces Devin, the world’s first AI
            software engineer capable of coding, creating websites and software
            through a single prompt, designed to work alongside human engineers.
            In Short Devin, the world’s first AI software engineer, can write
            codes, create websites, and software with just a single prompt. The
            AI tool is not intended to replace human engineers but to assist
            them and make their work easier. Devin has successfully passed
            engineering interviews from leading AI companies. Ever since ChatGPT
            and its sister chatbots burst onto the public consciousness a bit
            over a year ago, publishers and bloggers have used the tech to
            inundate the Internet with a massive flood of AI-generated content.
            For a while, platforms and users tolerated AI-generated writing and
            images or even embraced them. Now, the tide is turning in a big way.
            This week, Google — which is arguably the arbiter of much of what
            gets consumed online — grew fed up with the AI content polluting its
            systems. So it began what might be the biggest crackdown in search
            engine history, culling thousands of AI-generated sites from its
            index and effectively killing millions of AI-created pages in one
            giant purge. A single popular blog network lost 20 million monthly
            visits overnight. That’s only the tip of the iceberg. The backlash
            against low-quality AI content will continue and intensify as it
            gets easier and cheaper to generate. This has implications for web
            publishers, authors, and anyone who cares about the quality of
            digital information.
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
