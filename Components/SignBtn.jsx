import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const SignBtn = ({ text }) => {
  return (
    <View style={styles.sign}>
      <Text style={styles.signtext}>{text}</Text>
    </View>
  );
};

export default SignBtn;

const styles = StyleSheet.create({
  sign: {
    width: 312,
    height: 45,
    backgroundColor: "#666",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 50,
  },
  signtext: {
    fontSize: 15,
    fontWeight: "500",
  },
});
