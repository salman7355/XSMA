import { StyleSheet, Image, Pressable, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ movie, width, height, movies }) => {
  const { navigate } = useNavigation();
  let movieId = movies["id"];

  return (
    <Pressable
      onPress={() => {
        navigate("MovieDetails", { movieId });
      }}
      style={{
        width: width,
        height: height,
      }}
    >
      <Image
        style={styles.movieImage}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movies["poster_path"]}`,
        }}
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
