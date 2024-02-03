import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStackGroup from "../Stack/HomeStackGroup";
import Profile from "../../screens/Profile";

const Drawer = createDrawerNavigator();
const DrawerGroup = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "red",
        headerTintColor: "#DEE4E7",
        headerTransparent: true,
      }}
    >
      <Drawer.Screen name="Home" component={HomeStackGroup} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerGroup;
