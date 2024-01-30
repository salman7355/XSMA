import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Search from "./screens/Search";

import { TabBar } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "./Components/Button";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "./Components/Navbar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetails from "./screens/StackScreens/MovieDetails";
import Home from "./screens/Home";
import SeeAll from "./screens/StackScreens/SeeAll";
import WatchList from "./screens/WatchList";

//Stack Navigator
const HomeStack = createNativeStackNavigator();

const StackGroup = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          presentation: "modal",
          //  headerShown: false
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <HomeStack.Screen
        name="SeeAll"
        component={SeeAll}
        options={{
          headerTransparent: true,
          headerTintColor: "gray",
          headerRight: () => {
            return (
              <Ionicons
                name="search"
                size={24}
                color="white"
                style={{
                  paddingRight: 10,
                  paddingTop: 5,
                }}
              />
            );
          },
        }}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

// Tabs Navigator
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
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      <StackGroup />
    </NavigationContainer>
  );
};
