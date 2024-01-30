import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const MovieSearchCard = ({ btnHidden, movie }) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.movie}>
      <Pressable
        onPress={() => {
          navigate("MovieDetails", { movie });
        }}
        style={styles.imgContainer}
      >
        <Image
          source={require("../assets/Rectangle 57.png")}
          style={styles.img}
        />
      </Pressable>
      <View style={styles.imgDetails}>
        <View>
          <Text style={[styles.txtColor, styles.title]}>Madaari</Text>
          <Text style={[styles.txtColor, styles.yearandGenre]}>2016</Text>
          <Text style={[styles.txtColor, styles.yearandGenre]}>
            Genre : Drama, Thriller
          </Text>
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
    gap: 40,
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
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
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
