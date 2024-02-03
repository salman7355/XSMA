import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../Components/Button";

const Poster = () => {
  
  return (
    <View style={styles.poster}>
      <Image
        source={require("../assets/Rectangle 57.png")}
        style={styles.img}
      />
      <LinearGradient
        colors={["rgba(222, 228, 231, 0.50)", "rgba(23, 28, 31, 0.80)"]}
        style={styles.details}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.25, y: 0 }}
      >
        <View style={styles.titleGroup}>
          <View>
            <Text style={styles.title}>Loki : Season 2</Text>
            <Text style={styles.Filmcategory}>Action. Adventure, Fantasy</Text>
          </View>
          <View style={styles.watch}>
            <Button buttonName="play" buttonSize={15} text="Play" />
            <Button buttonName="add" buttonSize={20} text="My List" />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Poster;

const styles = StyleSheet.create({
  poster: {
    position: "relative",
    width: "100%",
    height: 400,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    width: "85%",
    height: 110,
    position: "absolute",
    left: "8%",
    bottom: 20,
    borderRadius: 35,
    padding: 15,
    paddingLeft: 30,
  },
  titleGroup: {
    gap: 10,
  },
  watch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
  },
  Filmcategory: {
    fontSize: 12,
    fontWeight: "400",
  },
});
