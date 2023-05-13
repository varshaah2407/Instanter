import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text,Dimensions } from 'react-native';
import Header from '../Header';
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Map({navigation}) {
    const [mapRegion, setMapRegion] = useState({
        latitude: 28.57966,
        longitude: 77.32111,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    
    const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
        }
    
        let location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        setMapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        console.log(location.coords.latitude, location.coords.longitude);
      };
    useEffect(() => {
        userLocation();
      }, []);
    const updateLocation =  () =>{
      var data = JSON.stringify({
        "latitude": mapRegion.latitude,
        "longitude": mapRegion.longitude
      });
      let id = AsyncStorage.getItem('id').then(res=>{
        console.log('res id :',res);
        var config = {
          method: 'put',
          url: `https://disaster-management-project-default-rtdb.asia-southeast1.firebasedatabase.app/users/${res}/location.json`,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    }
    useEffect(()=>{
      setTimeout(() => {
        updateLocation()
      }, 1000  * 5);
    },[])

    return (
        // < style={styles.container_a}>
        //  <Header />
        <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
        <Marker coordinate={{ latitude: 19.113646, longitude: 72.869736 }} pinColor={'blue'} title="Marker 1" />
        <Marker coordinate={{ latitude: 18.923950, longitude: 72.833267 }} pinColor={'blue'} title="Marker 2" />
      </MapView>
    </View>
            // /* <Text onPress={() => navigation.navigate('Home')}>
            //     Map Screen
            // </Text>  */}
        
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //   },
      map: {
        width: "100%",
        height: "100%",
      },
    container_a: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
        backgroundColor: '#e3ebf1'
    }
});

  
// // import * as React from 'react';
// // import { StyleSheet, View, Text } from 'react-native';

// // export default function Map({navigation}) {
// //     return (
// //         <View style={styles.container}>
// //             <Text onPress={() => navigation.navigate('Home')}>
// //                 Map Screen
// //             </Text>
// //         </View>
// //     );
// // }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         // justifyContent: 'center'
//         backgroundColor: '#e3ebf1'
//     }
// })
// export default function Map({navigation}){
//   return (
//     <Text>Hello</Text>
//   )
// }