import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "../Components/MovieCard";

const WatchList = () => {
  const arr = [];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={arr}
          renderItem={(item) => (
            <MovieCard
              movie={item.index}
              width={180}
              height={250}
              movies={null}
            />
          )}
          keyExtractor={(e) => e.index}
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingBottom: 15,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default WatchList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    gap: 25,
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 350,
    borderTopStartRadius: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
    rowGap: 16,
    columnGap: 10,
  },
});
