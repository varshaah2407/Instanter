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

//screen names
const homeName = "Home";
const MapName = "Map";
const NewsName = "News";
const AboutName = "About";
const ProfileName = "Profile";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

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
        <Tab.Screen name={AboutName} component={Newsletter} />
        <Tab.Screen name={NewsName} component={AboutPage} />
        <Tab.Screen name={ProfileName} component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
=======
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                "tabBarActiveTintColor": "tomato",
                "tabBarInactiveTintColor": "grey",
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
>>>>>>> 552717bfaeac870ce574e731fb060da338b31afe
}
