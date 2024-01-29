import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const MovieDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: params.movie,
      // headerShown: false, 
    });
  });

  return (
    <View>
      <Text>MovieDetails</Text>
      <Text style={{ color: "white" }}>{params.movie}</Text>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
