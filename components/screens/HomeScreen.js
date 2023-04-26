import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text onPress={() => alert("This is the Home screen")}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center'
    backgroundColor: "#E3EBF1",
  },
});
