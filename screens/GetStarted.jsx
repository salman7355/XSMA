import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import image from "../assets/getstarted.png";
import { LinearGradient } from "expo-linear-gradient";
import SignBtn from "../Components/SignBtn";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.img}>
        <View style={{ flex: 1 }}></View>
        <LinearGradient
          colors={["rgba(222, 228, 231, 0.50)", "rgba(23, 28, 31, 0.80)"]}
          style={styles.details}
          start={{ x: 0, y: 0 }}
          end={{ x: 1.25, y: 0 }}
        >
          <Text style={styles.title}>Welcome to App</Text>
          <Text style={styles.txt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            reiciendis
          </Text>
          <Pressable
            onPress={() => {
              navigate("SignUp");
            }}
          >
            <SignBtn text="Get Started" />
          </Pressable>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    flex: 1,
    // justifyContent: "space-evenly",
  },
  details: {
    flex: 0.5,
    // padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 30,
  },
  title: {
    fontWeight: "600",
    fontSize: 30,
  },
  txt: {
    color: "black",
    width: "75%",
  },
});
