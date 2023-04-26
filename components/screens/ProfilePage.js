<<<<<<< HEAD
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
=======
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../Header';
import DropdownComponent from '../DropDown';
export default function ProfilePage({navigation}) {
    return (
     
        <View style={styles.container}>
        <DropdownComponent />
            <Text onPress={() => navigation.navigate('Home')}>
                Profile page Screen
            </Text>
        </View>
       
    );
>>>>>>> cbc5e49741be55f3829a1f43b0853c33fb82e837
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
