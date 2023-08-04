import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

import bg from "../src/images/background.jpg";
import addContactIcon from "../src/images/add-contact-icon.svg";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgoundImage}
        source={bg}
        resizeMode="cover"
      >
        <View style={styles.form}>
          <View style={styles.avatar}></View>
          <Text>Registration</Text>
          <TextInput inputMode="text" />
          <TextInput inputMode="email" />
          <View>
            <TextInput inputMode="text" secureTextEntry={true} />
            <Button title="Show" />
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
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    position: "absolute",
    marginTop: "-16.5%",
    left: "33%",
    width: "33%",
    height: "33%",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
});

export default RegistrationScreen;
