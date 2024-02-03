import React from "react";
import TabGroup from "../Tabs/TabGroup";
import MovieDetails from "../../screens/StackScreens/MovieDetails";
import SeeAll from "../../screens/StackScreens/SeeAll";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();
const HomeStackGroup = () => {
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

export default HomeStackGroup;
