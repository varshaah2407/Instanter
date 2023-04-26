<<<<<<< HEAD
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//screens
import HomeScreen from "./screens/HomeScreen";
import Map from "./screens/Map";
import Newsletter from "./screens/Newsletter";
import AboutPage from "./screens/AboutPage";
import ProfilePage from "./screens/ProfilePage";
=======
import * as React from 'react';
import { Dropdown } from 'react-native-element-dropdown';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Ionicons from 'react-native-vector-icons/Ionicons'
import Header from './Header';
//screens
import HomeScreen from './screens/HomeScreen';
import Map from './screens/Map';
import Newsletter from './screens/Newsletter';
import AboutPage from './screens/AboutPage';
import ProfilePage from './screens/ProfilePage';
import { Dimensions } from 'react-native';
>>>>>>> cbc5e49741be55f3829a1f43b0853c33fb82e837

//screen names
const homeName = "Home";
const MapName = "Map";
const AboutName = "About";
const NewsName = "News";
const ProfileName = "Profile";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
<<<<<<< HEAD
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
=======
    return (
        <NavigationContainer>
        {/* <Header /> */}
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused,color, size}) => {
                    
                    let iconName;
                    let rn = route.name;
>>>>>>> cbc5e49741be55f3829a1f43b0853c33fb82e837

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === MapName) {
              iconName = focused ? "location" : "location-outline";
            } else if (rn === AboutName) {
              iconName = focused ? "information" : "information-outline";
            } else if (rn === NewsName) {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (rn === ProfileName) {
              iconName = focused ? "person" : "person-outline";
            }

<<<<<<< HEAD
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarStyle: [
            {
              display: "flex",
              backgroundColor: "#474747",
              height: 60,
            },
            null,
          ],
        })}
        // tabBarOptions={{
        //     activeTintColor: 'tomato',
        //     inactiveTintColor: 'grey',
        //     labelStyle: { paddingBottom: 10, fontSize: 10},
        //     style: {padding: 10, height: 70}
        // }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={MapName} component={Map} />
        <Tab.Screen name={AboutName} component={AboutPage} />
        <Tab.Screen name={NewsName} component={Newsletter} />
        <Tab.Screen name={ProfileName} component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
=======
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                headerShown: false,
              
                "tabBarActiveTintColor": "tomato",
                "tabBarInactiveTintColor": "grey",
                // "tabBarInactiveBackgroundColor": "",
                // "tabBarActiveBackgroundColor": "",

                "tabBarLabelStyle": {
                    "paddingBottom": 10,
                    "fontSize": 10
                },
                "tabBarStyle": [
                    {
                    "display": "flex"
                    },
                    null
                ]
            })}
            
            >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={MapName} component={Map}/>
                <Tab.Screen name={AboutName} component={AboutPage}/>
                <Tab.Screen name={NewsName} component={Newsletter}/>
                <Tab.Screen name={ProfileName} component={ProfilePage}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}
>>>>>>> cbc5e49741be55f3829a1f43b0853c33fb82e837
