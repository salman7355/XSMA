import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import MovieSearchCard from "../Components/MovieSearchCard";
import SearchNotFound from "../Components/SearchNotFound";
import { API_KEY } from "@env";

const Search = () => {
  const [word, setWord] = useState("");
  const [movies, setMovies] = useState(null);

  const filter = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${word}`
      );
      const { results } = await res.json();
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filter();
  }, [word]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-sharp" size={20} color="#DEE4E7" />
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          placeholderTextColor="#DEE4E7"
          onChangeText={setWord}
        />
      </View>
      {movies && movies.length >= 1 ? (
        <View>
          <Text style={[styles.textInput, styles.txt]}>Top Searches</Text>
          <View>
            <FlatList
              data={movies}
              renderItem={(item) => (
                <MovieSearchCard btnHidden={true} movie={item.item} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      ) : (
        <SearchNotFound />
      )}
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
