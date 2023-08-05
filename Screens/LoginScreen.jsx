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

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgoundImage}
        source={bg}
        resizeMode="cover"
      >
        <View style={styles.form}>
          <Text style={styles.registrationHeader}>Log in</Text>
          <TextInput
            inputMode="email"
            placeholder="Email address"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
          />
          <View style={styles.passwordWrapper}>
            <TextInput
              inputMode="text"
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#BDBDBD"
              style={[styles.input, styles.inputPassword]}
            />
            <TouchableOpacity style={styles.showButtonWrapper}>
              <Text style={styles.showButton}>Show</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.alreadyHaveAccountText}>
              Have not an account? Register
            </Text>
          </TouchableOpacity>
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
    flex: 0.56,
    alignItems: "center",
    paddingTop: "4%",
    paddingLeft: "4%",
    paddingRight: "4%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },

  registrationHeader: {
    marginBottom: "4%",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    color: "#212121",
  },
  input: {
    width: "100%",
    height: 51,
    padding: "4%",
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
  inputPassword: {
    paddingRight: 60,
  },
  passwordWrapper: {
    position: "relative",
    width: "100%",
    marginBottom: "5%",
  },
  showButtonWrapper: {
    position: "absolute",
    right: "4%",
    top: 13,
  },
  showButton: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1B4371",
  },
  registerButton: {
    width: "100%",
    height: 51,
    marginBottom: "2.5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 25,
  },
  registerButtonText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#FFFFFF",
  },
  alreadyHaveAccountText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1B4371",
  },
});

export default LoginScreen;
