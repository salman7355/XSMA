import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { API_KEY } from "@env";

const MovieDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [movie, setMovie] = useState(null);
  const { params } = route;

  // console.log(params.movieId);

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}`
      );
      const result = await res.json();
      setMovie(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const uri =
    "http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser";
  return (
    movie && (
      <View style={styles.container}>
        <View style={styles.imgcontainer}>
          <Image
            style={styles.img}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie["poster_path"]}`,
            }}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.Title}>{movie["original_title"]}</Text>
          <View style={styles.ratingandYear}>
            <Ionicons name="star" size={24} color="#666" />
            <Text style={styles.text}>{movie["vote_average"].toFixed(1)}</Text>
            {/* <Text style={styles.text}>&gt;</Text> */}
            {/* <Text style={styles.text}>2023</Text>
            <Text style={styles.age}>+13</Text> */}
          </View>
          <View style={styles.buttons}>
            <View style={[styles.play, styles.btn]}>
              <Ionicons name="play" size={24} color="white" />
              <Text style={styles.btn1Text}>Play</Text>
            </View>
            <View style={[styles.add, styles.btn]}>
              <Ionicons name="add" size={24} color="#666" />
              <Text style={styles.btn2Text}>My List</Text>
            </View>
          </View>
          <View style={styles.genre}>
            <Text style={[styles.text, styles.genreText]}>Genre : </Text>
            <Text numberOfLines={1} style={[styles.text, styles.genreText]}>
              {movie["genres"].map((e) => {
                return `${e.name} `;
              })}
            </Text>
          </View>
          <View>
            <Text style={[styles.genreText, styles.text]}>
              {movie["overview"]}
            </Text>
          </View>
          {/*  adding More Like This */}
        </View>
      </View>
    )
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A20",
  },
  imgcontainer: {
    width: "100%",
    height: 360,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    paddingLeft: 23,
    paddingTop: 20,
    paddingRight: 23,
    gap: 15,
  },
  Title: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  ratingandYear: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    width: "50%",
    // paddingTop: 10,
  },
  text: {
    color: "#666",
  },
  age: {
    color: "#666",
    borderColor: "#666",
    width: 45,
    height: 20,
    borderWidth: 1,
    borderRadius: 6,
    // alignSelf: "center",
    paddingLeft: 9,
    paddingBottom: 1,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingTop: 20,
  },
  btn: {
    width: 160,
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  play: {
    backgroundColor: "#666",
  },
  add: {
    borderWidth: 2,
    borderColor: "#666",
  },
  btn1Text: {
    color: "white",
  },
  btn2Text: {
    color: "#666",
  },
  genre: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  genreText: {
    fontSize: 11,
  },
});
