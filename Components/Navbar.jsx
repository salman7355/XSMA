import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.nav}>
      <Text style={styles.text}>S</Text>
      <View style={styles.rightGroup}>
        <Ionicons
          name="search"
          onPress={() => {
            navigate("Search");
          }}
          size={30}
          color="white"
        />
        <Ionicons name="person-circle-outline" size={30} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  rightGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
