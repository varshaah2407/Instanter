import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import axios from "axios";

import Header from "../Header";
export default function ProfilePage({ navigation }) {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const addUser = () => {
    var data = JSON.stringify({
      name: text,
      number: number,
      location: "",
      disaster: ["init"],
    });

    var config = {
      method: "post",
      url: "https://disaster-management-project-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.name));
        AsyncStorage.setItem("id", response.data.name);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Header />
      {/* <Text onPress={() => navigation.navigate('Home')}>
                Profile page Screen
            </Text> */}
      <StatusBar style="auto" />
      <View style={styles.back}></View>
      {/* <View
        style={{
          padding: 10,
          width: "100",
          backgroundColor: "#000",
          height: 150,
        }}
      ></View> */}
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/profile-pic.png")}
          style={{
            width: 160,
            height: 160,
            borderRadius: 100,
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
          }}
        ></Image>
      </View>
      <SafeAreaView>
        {/* <View style={styles.inputcontainer}>
          <Text style={styles.inputtext}>Location:    Vidyavihar</Text>
        </View> */}
        <View style={styles.inputcontainer}>
          <Text style={styles.inputtext}>Name: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Name"
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.inputtext}>Phone Number: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Number"
          />
        </View>
        <Button title="submit" onPress={() => addUser()} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },

  inputtext: {
    textDecorationStyle: "solid",
    fontWeight: 500,
    fontSize: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 25,
    marginHorizontal: -120,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    marginHorizontal: -120,
  },
});
