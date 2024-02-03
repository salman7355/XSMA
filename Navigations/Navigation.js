import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import DrawerGroup from "./Drawer/DrawerGroup";
import LoginStackGroup from "../Navigations/Stack/LoginStackGroup";

export default Navigation = () => {
  const [userIn, setUserIn] = useState(null);
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      {userIn === null ? <LoginStackGroup /> : <DrawerGroup />}
    </NavigationContainer>
  );
};
