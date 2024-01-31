import { Image, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const UserSignInput = ({ text }) => {
  return (
    <View style={styles.emailContainer}>
      <Text style={[styles.label, styles.txt]}>{text}</Text>
      <TextInput
        style={[styles.input, styles.txt]}
        placeholder={`Enter your ${text}`}
        placeholderTextColor="#DEE4E7"
      />
    </View>
  );
};

export default UserSignInput;

const styles = StyleSheet.create({
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
});
