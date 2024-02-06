import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import Category from "../Components/Category";
import Poster from "../Components/Poster";

const Home = () => {
  const VertArr = [
    {
      id: 1,
      name: "Upcoming",
      apiWord: "upcoming",
    },
    {
      id: 2,
      name: "Top Rated",
      apiWord: "top_rated",
    },
    {
      id: 3,
      name: "Now Playing",
      apiWord: "now_playing",
    },
    {
      id: 4,
      name: "Popular",
      apiWord: "popular",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={VertArr}
          renderItem={(item) => (
            <Category
              index={item.item.id}
              name={item.item.name}
              apiName={item.item.apiWord}
            />
          )}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<Poster />}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categories: {
    flex: 1,
  },
});
