import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const SearchNotFound = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require("../assets/sasasa.png")} style={styles.img} />
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.notfound}>Not Found</Text>
        <Text style={styles.text}>
          Sorry, the keyword you entered could not be found. Try to check again
          or search with other keywords.
        </Text>
      </View>
    </View>
  );
};

export default SearchNotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imgContainer: {
    backgroundColor: "white",
    width: 250,
    height: 350,
    marginLeft: -70,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  notfound: {
    fontSize: 37,
    fontWeight: "700",
    color: "#DEE4E7",
  },
  text: {
    color: "#DEE4E7",
    fontSize: 11,
    fontWeight: "300",
    width: 250,
  },
  txtContainer: {
    alignItems: "center",
    gap: 10,
    flex: 1,
    width: 380,
  },
});
