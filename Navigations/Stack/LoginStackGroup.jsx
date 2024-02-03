import React from "react";
import GetStarted from "../../screens/GetStarted";
import SignUp from "../../screens/Auth/SignUp";
import SignIn from "../../screens/Auth/SignIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerGroup from "../Drawer/DrawerGroup";

const LoginStack = createNativeStackNavigator();
const LoginStackGroup = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <LoginStack.Screen name="GetStarted" component={GetStarted} />
      <LoginStack.Screen name="SignUp" component={SignUp} />
      <LoginStack.Screen name="SignIn" component={SignIn} />
      <LoginStack.Screen
        name="DrawerGroup"
        component={DrawerGroup}
        options={{
          headerShown: false,
        }}
      />
    </LoginStack.Navigator>
  );
};

export default LoginStackGroup;
