import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Navbar from "../../Components/Navbar";
import Home from "../../screens/Home";
import WatchList from "../../screens/WatchList";
import Search from "../../screens/Search";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabGroup = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search-sharp" : "search-outline";
          } else if (route.name === "WatchList") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 0,
          elevation: 0, //Android
          shadowOpacity: 0, // IOS
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        // headerShown: false,
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
      })}
    >
      <Tab.Screen
        options={{
          headerTransparent: true,
          header: () => <Navbar />,
          tabBarLabel: "Home",
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchList}
        options={{
          headerTransparent: true,
          headerTitleContainerStyle: {
            paddingLeft: 13,
            height: 70,
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "500",
            color: "#DEE4E7",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabGroup;
