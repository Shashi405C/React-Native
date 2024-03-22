import { View, Text } from "react-native";

export default function Views() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        paddingHorizontal: 60,
        paddingVertical: 200,
        paddingLeft: 200,
      }}
    >
      <Text>
        <Text style={{ color: "white", fontSize: 50 }}>Hello world</Text>
      </Text>
    </View>
  );
}
