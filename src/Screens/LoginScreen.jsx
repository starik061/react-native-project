import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import bg from "../images/background.jpg";

const LoginScreen = () => {
  const [activeInput, setActiveInput] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShowen, setIsPasswordShowen] = useState(false);

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleLoginFormSubmit = () => {
    console.log("Data", `${login} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgoundImage}
          source={bg}
          resizeMode="cover"
        >
          <View style={styles.form}>
            <Text style={styles.registrationHeader}>Log in</Text>
            <KeyboardAvoidingView
              style={styles.keyboardAvoidingView}
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                name="email"
                inputMode="email"
                placeholder="Email address"
                placeholderTextColor="#BDBDBD"
                style={[
                  styles.input,
                  activeInput === "email" && styles.inputActive,
                ]}
                onFocus={() => {
                  handleInputFocus("email");
                }}
                onBlur={() => setActiveInput(null)}
                onChangeText={setLogin}
              />
            </KeyboardAvoidingView>
            <View style={styles.passwordWrapper}>
              <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  name="password"
                  inputMode="text"
                  secureTextEntry={isPasswordShowen ? false : true}
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"
                  style={[
                    styles.input,
                    styles.inputPassword,
                    activeInput === "password" && styles.inputActive,
                  ]}
                  onFocus={() => {
                    handleInputFocus("password");
                  }}
                  onBlur={() => setActiveInput(null)}
                  onChangeText={setPassword}
                />
              </KeyboardAvoidingView>
              <TouchableOpacity
                style={styles.showButtonWrapper}
                onPress={() => setIsPasswordShowen(!isPasswordShowen)}
              >
                <Text style={styles.showButton}>
                  {isPasswordShowen ? "Hide" : "Show"}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleLoginFormSubmit}
            >
              <Text style={styles.registerButtonText}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.alreadyHaveAccountText}>
                Have not an account?{" "}
                <Text
                  style={[
                    styles.alreadyHaveAccountText,
                    styles.alreadyHaveAccountTextRegister,
                  ]}
                >
                  Register
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 111,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
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
  inputActive: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
  inputPassword: {
    paddingRight: 60,
  },
  passwordWrapper: {
    position: "relative",
    width: "100%",
    marginBottom: 43,
  },
  showButtonWrapper: {
    position: "absolute",
    right: 16,
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
    marginBottom: 16,
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
  alreadyHaveAccountTextRegister: {
    textDecorationLine: "underline",
  },
  keyboardAvoidingView: {
    width: "100%",
  },
});

export default LoginScreen;
