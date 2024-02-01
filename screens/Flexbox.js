import React from "react";
import { Text, View, Image } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from "../Bottomnavigation/HomeScreen";
import Recent from "../Bottomnavigation/Recent";
import Exams from "../Bottomnavigation/Exams";
import Profile from "../Bottomnavigation/Profile";
import Notification from "../Bottomnavigation/Notification";
import Icon from 'react-native-vector-icons/AntDesign';




const Tab = createBottomTabNavigator()

const HomeIcon = () => (
    <Image
      source={require("../assets/Homeicon.png")}
      style={{ width: 25, height: 25, tintColor: "white" }}
    />
  );
  const ExploreIcon = () => (
    <Image
      source={require("../assets/search1.png")}
      style={{ width: 20, height: 20, tintColor: "white" }}
    />
  );
  const DiscoverIcon = () => (
    <Image
      source={require("../assets/discover.png")}
      style={{ width: 24, height: 24, tintColor: "white" }}
    />
  );
  const NotifiactionIcon = () => (
    <Image
      source={require("../assets/Notificationicon.png")}
      style={{ width: 24, height: 24, tintColor: "white" }}
    />
  );
  const AccountIcon = () => (
    <Image
      source={require("../assets/manageuser.png")}
      style={{ width: 22, height: 22, tintColor: "white" }}
    />
  );

const Flexbox = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
              position: 'absolute', // Position the tab bar at the bottom
              bottom: 15, // Align it at the bottom
              left: 20, // Align it to the left
              right: 0, // Align it to the right
              backgroundColor: '#00070a',
              elevation: 25, // Add an elevation to create a floating effect
              shadowColor: 'black', // Set the shadow color
              height:60,
              width:'90%',
              borderRadius:15,
              borderColor:'black',
              borderWidth:3
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'grey',
            tabBarItemStyle: {
              marginTop: 2,
              marginBottom: 2,

            },
          }} >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon />
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }} />
            <Tab.Screen
                name="Recent"
                component={Recent}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <ExploreIcon />
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,
                    },
                }} />
                 <Tab.Screen
                name="Exams"
                component={Exams}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <DiscoverIcon />
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }} />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <NotifiactionIcon />
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AccountIcon />
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }}
            />
        </Tab.Navigator>

    )
}
export default Flexbox;
