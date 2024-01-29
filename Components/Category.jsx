import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MovieCard from "../Components/MovieCard";
const Category = () => {
  const Arr = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];
  return (
    <View style={styles.category}>
      <View style={styles.categoryTitle}>
        <Text style={styles.categoryName}>Trending</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.movies}
        data={Arr}
        renderItem={(item) => <MovieCard movie={item.index} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    height: 220,
    paddingLeft: 10,
    gap: 20,
  },
  categoryTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: "500",
    color: "gray",
  },
  seeAll: {
    fontSize: 12,
    fontWeight: "400",
    color: "gray",
  },
});
