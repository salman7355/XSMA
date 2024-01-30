import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import MovieSearchCard from "../../Components/MovieSearchCard";

const SeeAll = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.name,
    });
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
    <View style={styles.container}>
      <FlatList
        data={Arr}
        renderItem={(item) => (
          <MovieSearchCard btnHidden={false} movie={item.item.id} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SeeAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 10,
    gap: 30,
  },
});
