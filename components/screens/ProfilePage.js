import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function ProfilePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.profileImage}
            source={require("../../assets/profileLogo.png")}
          />
        </Text>
      </View>

      <View styles={styles.flexboxes}>
        <Text>Full Name</Text>
        <Text>ABC</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center'
    backgroundColor: "#e3ebf1",
  },
  profileImage: {
    height: 150,
    width: 150,
    marginTop: 60,
  },
  flexboxes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
