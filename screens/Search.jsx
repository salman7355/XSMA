import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import MovieSearchCard from "../Components/MovieSearchCard";
import SearchNotFound from "../Components/SearchNotFound";

const Search = () => {
  const notfound = false;
  const arr = [
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
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-sharp" size={20} color="#DEE4E7" />
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          placeholderTextColor="#DEE4E7"
        />
      </View>
      <View>
        <Text style={[styles.textInput, styles.txt]}>Top Searches</Text>
        {notfound ? (
          <SearchNotFound />
        ) : (
          <View>
            <FlatList
              data={arr}
              renderItem={(item) => (
                <MovieSearchCard btnHidden={true} movie={item.item.id} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 70,
    paddingLeft: 30,
    gap: 30,
  },
  searchBar: {
    width: 270,
    borderWidth: 1,
    borderColor: "#DEE4E7",
    borderRadius: 20,
    height: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 16,
    gap: 10,
  },
  textInput: {
    color: "#DEE4E7",
  },
  txt: {
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 30,
  },
  moviesContainer: {
    height: 200,
  },
});
