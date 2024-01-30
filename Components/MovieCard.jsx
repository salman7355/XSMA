import { StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ movie, width, height }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("MovieDetails", { movie });
      }}
      style={{
        width: width,
        height: height,
      }}
    >
      <Image
        style={styles.movieImage}
        source={require("../assets/Madaari Movie Review 1.png")}
      />
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  movieImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
