import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const MovieSearchCard = ({ btnHidden, movie }) => {
  const { navigate } = useNavigation();
  let movieId = movie["id"];

  return (
    <View style={styles.movie}>
      <Pressable
        onPress={() => {
          navigate("MovieDetails", { movieId });
        }}
        style={styles.imgContainer}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie["poster_path"]}`,
          }}
          style={styles.img}
        />
      </Pressable>
      <View style={styles.imgDetails}>
        <View>
          <Text
            numberOfLines={5}
            ellipsizeMode="tail"
            style={[styles.txtColor, styles.title]}
          >
            {movie["original_title"]}
          </Text>
          <Text style={[styles.txtColor, styles.yearandGenre]}>
            {movie["release_date"]}
          </Text>
          {/* <Text style={[styles.txtColor, styles.yearandGenre]}>
            Genre : Drama, Thriller
          </Text> */}
        </View>
        {!btnHidden && (
          <View style={styles.btn}>
            <Ionicons name="add" size={15} color="#DEE4E7" />
            <Text
              style={[styles.txtColor, styles.yearandGenre, styles.btnsFize]}
            >
              My List
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default MovieSearchCard;

const styles = StyleSheet.create({
  movie: {
    flexDirection: "row",
    gap: 20,
    alignItems: "flex-start",
    paddingBottom: 30,
  },
  imgContainer: {
    width: 110,
    height: 180,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  txtColor: {
    color: "white",
  },
  imgDetails: {
    justifyContent: "space-between",
    gap: 60,
    height: 180,
    width: 200,

    // backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 5,
  },
  yearandGenre: {
    fontSize: 10,
    fontWeight: "400",
    color: "#DEE4E7",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 20,
    borderWidth: 1,
    borderColor: "#DEE4E7",
    borderRadius: 10,
    gap: 3,
  },
  btnsFize: {
    fontSize: 9,
  },
});
