import { StyleSheet, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ movie }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("MovieDetails", { movie });
      }}
      style={styles.movie}
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
  movie: {
    width: 120,
    height: 160,
  },
  movieImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
