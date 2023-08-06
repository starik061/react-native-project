import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import bg from "../assets/images/background.jpg";

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
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.alreadyHaveAccountText}>
              Already have an account? Log in
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

    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 45,
    paddingHorizontal: 16,
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
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgoundImage: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },
//   form: {
//     position: "relative",
//     flex: 0.68,
//     alignItems: "center",
//     paddingTop: "24%",
//     paddingLeft: "4%",
//     paddingRight: "4%",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     backgroundColor: "#FFFFFF",
//   },
//   avatar: {
//     position: "absolute",
//     top: -60,
//     width: 120,
//     height: 120,
//     borderRadius: 16,
//     backgroundColor: "#F6F6F6",
//   },
//   addAvatarIcon: {
//     position: "absolute",
//     right: -12.5,
//     bottom: 14,
//   },
//   registrationHeader: {
//     marginBottom: 32,
//     fontFamily: "Roboto",
//     fontWeight: "500",
//     fontSize: 30,
//     color: "#212121",
//   },
//   input: {
//     width: "100%",
//     height: 51,
//     padding: "4%",
//     marginBottom: 16,
//     fontSize: 16,
//     lineHeight: 1.17,
//     fontFamily: "Roboto",
//     backgroundColor: "#F6F6F6",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "#E8E8E8",
//     borderRadius: 5,
//   },
//   inputPassword: {
//     paddingRight: 60,
//   },
//   passwordWrapper: {
//     position: "relative",
//     width: "100%",
//     marginBottom: "5%",
//   },
//   showButtonWrapper: {
//     position: "absolute",
//     right: "4%",
//     top: 13,
//   },
//   showButton: {
//     fontFamily: "Roboto",
//     fontSize: 16,
//     color: "#1B4371",
//   },
//   registerButton: {
//     width: "100%",
//     height: 51,
//     marginBottom: "2.5%",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FF6C00",
//     borderRadius: 25,
//   },
//   registerButtonText: {
//     fontFamily: "Roboto",
//     fontSize: 16,
//     color: "#FFFFFF",
//   },
//   alreadyHaveAccountText: {
//     fontFamily: "Roboto",
//     fontSize: 16,
//     color: "#1B4371",
//   },
// });

export default RegistrationScreen;
