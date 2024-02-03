import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SignBtn from "../../Components/SignBtn";
import UserSignInput from "../../Components/UserSignInput";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
// import { FIREBASE_AUTH } from "../../FirebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const { navigate } = useNavigation();
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const auth = FIREBASE_AUTH;

  // const signup = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log(res);
  //     navigate("SignIn");
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginLogo}>
        <Image source={require("../../assets/favicon.png")} />
        <Text style={styles.pageTitle}>Create your Account</Text>
      </View>
      <LinearGradient
        colors={[
          "rgba(222, 228, 231, 0.25)",
          "rgba(222, 228, 231, 0.15)",
          "rgba(23, 28, 31, 0.0)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.loginDetails}
      >
        <View style={styles.login}>
          <View style={styles.imgContainer}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: "100%", borderRadius: 37.5 }}
              />
            ) : (
              <View style={styles.imgContainer}>
                <Ionicons name="person-outline" size={35} color="black" />
                <Ionicons
                  style={styles.camera}
                  name="camera-outline"
                  size={24}
                  color="black"
                  onPress={pickImage}
                />
              </View>
            )}
          </View>
          {/* <UserSignInput text="Name" /> */}
          <View style={styles.emailContainer}>
            <Text style={[styles.label, styles.txt]}>Name</Text>
            <TextInput
              style={[styles.input, styles.txt]}
              placeholder={`Enter your Name`}
              placeholderTextColor="#DEE4E7"
            />
          </View>
          {/* <UserSignInput text="Email" /> */}
          <View style={styles.emailContainer}>
            <Text style={[styles.label, styles.txt]}>Email</Text>
            <TextInput
              style={[styles.input, styles.txt]}
              placeholder={`Enter your Email`}
              placeholderTextColor="#DEE4E7"
              onChangeText={setEmail}
            />
          </View>
          {/* <UserSignInput text="Password" /> */}
          <View style={styles.emailContainer}>
            <Text style={[styles.label, styles.txt]}>Password</Text>
            <TextInput
              style={[styles.input, styles.txt]}
              placeholder={`Enter your Password`}
              placeholderTextColor="#DEE4E7"
              onChangeText={setPassword}
            />
          </View>

          {/* image Picker */}
          {/* <View style={styles.emailContainer}>
            <Text style={[styles.label, styles.txt]}>Image</Text>
            <TextInput
              style={[styles.input, styles.txt]}
              placeholder="Upload your Image"
              placeholderTextColor="#DEE4E7"
            />
          </View> */}
          <Pressable>
            <SignBtn text="Sign up" />
          </Pressable>
          <View style={styles.signupp}>
            <Text style={[styles.signuptxt, styles.txt]}>
              Already have an account !!
            </Text>
            <Text
              onPress={() => {
                navigate("SignIn");
              }}
              style={styles.signuptxt}
            >
              Sign in
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgContainer: {
    width: 75,
    height: 75,
    backgroundColor: "gray",
    alignSelf: "center",
    borderRadius: 37.5,
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  camera: {
    position: "absolute",
    bottom: -5,
    right: 0,
  },
  loginLogo: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    gap: 15,
  },
  pageTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "400",
  },
  loginDetails: {
    flex: 2.5,
    width: "100%",
    borderRadius: 50,
    // for IOS
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.26,
    paddingLeft: 30,
    alignItems: "flex-start",
  },
  login: {
    paddingTop: 40,
    gap: 30,
  },
  emailContainer: {
    gap: 10,
  },
  txt: {
    color: "#DEE4E7",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    width: 315,
    borderWidth: 1,
    height: 50,
    borderRadius: 15,
    paddingLeft: 20,
    borderColor: "#DEE4E7",
  },
  remember: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  signuptxt: {
    color: "#666",
    fontSize: 10,
    fontWeight: "400",
  },
  signupp: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 8,
  },
  emailContainer: {
    gap: 10,
  },
  txt: {
    color: "#DEE4E7",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    width: 315,
    borderWidth: 1,
    height: 50,
    borderRadius: 15,
    paddingLeft: 20,
    borderColor: "#DEE4E7",
  },
});
