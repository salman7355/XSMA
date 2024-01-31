import { Image, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SignBtn from "../../Components/SignBtn";
import UserSignInput from "../../Components/UserSignInput";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginLogo}>
        <Image source={require("../../assets/favicon.png")} />
        <Text style={styles.pageTitle}>Create your Account</Text>
      </View>
      <LinearGradient
        colors={[
          "rgba(222, 228, 231, 0.25)",
          "rgba(222, 228, 231, 0.15)",
          "rgba(23, 28, 31, 0.0)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.loginDetails}
      >
        <View style={styles.login}>
          <UserSignInput text="Name" />
          <UserSignInput text="Email" />
          <UserSignInput text="Password" />

          {/* image Picker */}
          <View style={styles.emailContainer}>
            <Text style={[styles.label, styles.txt]}>Image</Text>
            <TextInput
              style={[styles.input, styles.txt]}
              placeholder="Upload your Image"
              placeholderTextColor="#DEE4E7"
            />
          </View>
          <SignBtn text="Sign up" />
          <View style={styles.signupp}>
            <Text style={[styles.signuptxt, styles.txt]}>
              Already have an account !!
            </Text>
            <Text style={styles.signuptxt}>Sign in</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginLogo: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    gap: 15,
  },
  pageTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "400",
  },
  loginDetails: {
    flex: 2.5,
    width: "100%",
    borderRadius: 50,
    // for IOS
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.26,
    paddingLeft: 30,
    alignItems: "flex-start",
  },
  login: {
    paddingTop: 50,
    gap: 30,
  },
  emailContainer: {
    gap: 10,
  },
  txt: {
    color: "#DEE4E7",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    width: 315,
    borderWidth: 1,
    height: 50,
    borderRadius: 15,
    paddingLeft: 20,
    borderColor: "#DEE4E7",
  },
  remember: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  signuptxt: {
    color: "#666",
    fontSize: 10,
    fontWeight: "400",
  },
  signupp: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 8,
  },
});
