import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Button = ({ buttonName, buttonSize, text }) => {
  return (
    <View style={styles.button}>
      <Ionicons name={buttonName} size={buttonSize} color="black" />
      <Text>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
