import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import bg from "../src/images/background.jpg";
// import AddAvatarIcon from "../src/images/add-avatar-icon.svg";
import { AntDesign } from "@expo/vector-icons";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgoundImage}
        source={bg}
        resizeMode="cover"
      >
        <View style={styles.form}>
          <View style={styles.avatar}>
            <AntDesign
              name="pluscircleo"
              size={25}
              color="#FF6C00"
              style={styles.addAvatarIcon}
            />

            {/* <AddAvatarIcon
              style={styles.addAvatarIcon}
              width={25}
              height={25}
            ></AddAvatarIcon> */}
          </View>
          <Text style={styles.registrationHeader}>Registration</Text>
          <TextInput
            inputMode="text"
            placeholder="Login"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
          />
          <TextInput
            inputMode="email"
            placeholder="Email address"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              inputMode="text"
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#BDBDBD"
              style={styles.input}
            />
            <TouchableOpacity style={styles.showPasswordContainer}>
              <Text style={styles.showPasswordText}>Show</Text>
            </TouchableOpacity>
          </View>

          <Button title="Register" />
          <TouchableHighlight>
            <Text style={{ color: "white" }}>
              Already have an account? Log in
            </Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgoundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    flex: 0.68,
    alignItems: "center",
    paddingTop: "24%",
    paddingLeft: "4%",
    paddingRight: "4%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addAvatarIcon: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
  },
  registrationHeader: {
    marginBottom: 32,
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    color: "#212121",
  },
  input: {
    width: "100%",
    height: 51,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 1.17,
    fontFamily: "Roboto",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 5,
  },
  passwordContainer: {
    width: "100%",
    position: "relative",
  },

  showPasswordContainer: {
    position: "absolute",
    height: "100%",
    right: 16,
    backgroundColor: "red",
  },
  // transform: [{ translateY: 12.5 }],

  showPasswordText: {
    height: "100%",
    fontSize: 16,
    lineHeight: 1.17,
    fontFamily: "Roboto",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
