import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  
  import React, { useRef, useState } from "react";
  import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
  import { firebaseCongfig } from "../../config";
  import firebase from "firebase/compat/app";
  import HomeScreen from "./HomeScreen";
  import { NavigationContainer } from "@react-navigation/native";
  import { useNavigation } from "@react-navigation/native";
  import Header from "../Header";
  
  const OTP = () => {
    const navigation = useNavigation();
    //console.log(navigation);
    const [phoneNumber, setPhoneNumber] = useState(" ");
    const [code, setCode] = useState(" ");
    const [verificationId, setVerficationId] = useState(null);
    const recaptchaVerifier = useRef(null);
  
    const sendVerification = () => {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerficationId);
      setPhoneNumber(" ");
    };
  
    const confirmCode = () => {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(() => {
          setCode(" ");
          console.log(alert("Login Successful"));
          navigation.navigate("homeName");
        })
        .catch((error) => {
          alert(error);
        });
    };
  
    return (
      <View style={styles.container}>
      <View style = {styles.header}>
      <Header />
      </View>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseCongfig}
        />
        <Text styles={styles.otpText}>Login using Otp</Text>
        <TextInput
          placeholder="Phone Number with Country Code"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoCompleteType="tel"
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.sendVerification}
          onPress={sendVerification}
        >
          <Text style={styles.buttonText}>Send Verification</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Confirm Code"
          onChangeText={setCode}
          keyboardType="number-pad"
          autoCompleteType="tel"
          style={styles.textInput}
        />
  
        <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
          <Text style={styles.buttonText}>Confirm Verification</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
   
    
    },
    textInput: {
      paddingTop: 40,
      paddingBottom: 20,
      paddingHorizontal: 20,
      fontSize: 24,
      borderBottomColor: "#fff",
      borderBottomWidth: 2,
      marginBottom: 20,
      textAlign: "center",
      color: "#fff",
    },
    sendVerification: {
      padding: 20,
      backgroundColor: "#3498db",
      borderRadius: 10,
    },
    sendCode: {
      padding: 20,
      backgroundColor: "#9b59b6",
      borderRadius: 10,
    },
    buttonText: {
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
    },
    otpText: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#fff",
      margin: 20,
    },
    header: {
      
      marginTop:10,
paddingTop:0,    }
  });
  
  OTP.navigationOptions = { tabBarVisible: false };
  
  export default OTP;
  