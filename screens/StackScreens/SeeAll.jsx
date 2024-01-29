import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const SeeAll = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Trending",
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>SeeAll</Text>
    </SafeAreaView>
  );
};

export default SeeAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
