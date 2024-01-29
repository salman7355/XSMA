import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import Category from "../Components/Category";
import Poster from "../Components/Poster";

const Home = () => {
  const VertArr = [
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
  ];
  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={VertArr}
          renderItem={(item) => <Category index={item.index} />}
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
