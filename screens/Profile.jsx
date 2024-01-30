import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.userImgContainer}>
          <Image
            style={styles.userImg}
            source={require("../assets/Vector.jpg")}
          />
        </View>
        <View style={styles.userDetails}>
          <Text style={[styles.txt, styles.userName]}>Demo Name</Text>
          <Text style={[styles.txt, styles.Email]}>demoemail@gmail.com</Text>
        </View>
      </View>
      <View style={styles.tabs}>
        <Pressable
          style={styles.watchList}
          onPress={() => {
            navigate("WatchList");
          }}
        >
          <MaterialIcons name="bookmark" size={24} color="#DEE4E7" />
          <Text style={styles.txt}>Watch List</Text>
        </Pressable>
        <View style={styles.logout}>
          <View style={styles.logoutImgContainer}>
            <Image
              style={styles.userImg}
              source={require("../assets/Sign_in_square.png")}
            />
          </View>
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 110,
    paddingLeft: 10,
  },
  txt: {
    color: "#DEE4E7",
    fontWeight: "500",
  },
  user: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  userImgContainer: {
    width: 70,
    height: 70,
  },
  tabs: {
    // backgroundColor: "white",
    flex: 1,
    alignItems: "flex-start",
    gap: 20,
    paddingTop: 50,
  },
  userImg: {
    width: "100%",
    height: "100%",
    borderRadius: 35,
  },
  userDetails: {
    gap: 5,
  },
  userName: {
    fontSize: 19,
  },
  Email: {
    fontSize: 13,
  },
  logoutImgContainer: {
    width: 30,
    height: 30,
  },
  logoutText: {
    color: "#960000",
    fontSize: 18,
    fontWeight: "500",
  },
  logout: {
    flexDirection: "row",
    gap: 5,
  },
  watchList: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
