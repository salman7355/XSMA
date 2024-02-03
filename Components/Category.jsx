import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { useNavigation } from "@react-navigation/native";
import { API_KEY } from "@env";

const Category = ({ index, name, apiName }) => {
  const { navigate } = useNavigation();
  const [categoryy, setCategory] = useState(null);

  const fetchCategories = async (name) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${name}?language=en-US&page=1&api_key=${API_KEY}`
      );
      const { results } = await res.json();
      setCategory(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories(apiName);
  }, []);

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
    categoryy && (
      <View style={styles.category}>
        <View style={styles.categoryTitle}>
          <Text style={styles.categoryName}>{name}</Text>
          <Text
            onPress={() => {
              navigate("SeeAll", { name });
            }}
            style={styles.seeAll}
          >
            See all
          </Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={Arr}
          renderItem={(item) => (
            <MovieCard
              movie={item.index}
              width={120}
              height={160}
              movies={categoryy[item.index]}
            />
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    )
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    height: 220,
    paddingLeft: 10,
    gap: 20,
    // padding: 20,
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
