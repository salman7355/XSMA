import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SignBtn from "../../Components/SignBtn";
import UserSignInput from "../../Components/UserSignInput";
import { useNavigation } from "@react-navigation/native";
// import { FIREBASE_AUTH } from "../../FirebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const auth = FIREBASE_AUTH;

  // const signin = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await signInWithEmailAndPassword(auth, email, password);
  //     console.log(res);
  //     navigate("DrawerGroup");
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const submit = async () => {
  //   try {
  //     // const api = "http://localhost:3001/login";
  //     const response = await fetch("http://192.168.1.10:3000/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //     });
  //     if (response.ok) {
  //       const jsonResponse = await response.json();
  //       setResponseData(jsonResponse);
  //       console.log(jsonResponse);
  //       navigate("DrawerGroup");
  //     } else {
  //       // Handle error cases
  //       console.error("Error:", response.status, response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.loginLogo}>
        <Image source={require("../../assets/favicon.png")} />
        <Text style={styles.pageTitle}>Login to your Account</Text>
      </View>
      <LinearGradient
        colors={["rgba(222, 228, 231, 0.25)", "rgba(23, 28, 31, 0.0)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.loginDetails}
      >
        <View style={styles.login}>
          <View style={styles.emailContainer}>
            <Text style={[styles.label, styles.txt]}>Email</Text>
            <TextInput
              style={[styles.input, styles.txt]}
              placeholder={`Enter your Email`}
              placeholderTextColor="#DEE4E7"
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.emailContainer}>
            <Text style={[styles.label, styles.txt]}>Password</Text>
            <TextInput
              style={[styles.input, styles.txt]}
              placeholder={`Enter your Password`}
              placeholderTextColor="#DEE4E7"
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.remember}>
            <MaterialCommunityIcons
              name="checkbox-blank-outline"
              size={20}
              color="#DEE4E7"
            />
            <Text style={styles.txt}>Remember me</Text>
          </View>
          <Pressable
            onPress={() => {
              navigate("DrawerGroup");
            }}
          >
            <SignBtn text="Sign in" />
          </Pressable>
          <View style={styles.signupp}>
            <Text style={[styles.signuptxt, styles.txt]}>
              Don't have an account?
            </Text>
            <Text
              onPress={() => {
                navigate("SignUp");
              }}
              style={styles.signuptxt}
            >
              Sign up fo free!
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
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
    flex: 1.3,
    width: "100%",
    borderRadius: 50,
    // for IOS
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.26,
    paddingLeft: 30,
    alignItems: "flex-start",
  },
  login: {
    paddingTop: 50,
    gap: 30,
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
