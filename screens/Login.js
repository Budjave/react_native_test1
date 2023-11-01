import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Login = ({navigation}) => {
  const signUp = () => navigation.navigate('Register')
  return (
    <View style={css.container}>
      <Image
        source={require("../assets/Instagram_logo.svg.png")}
        style={css.img}
      />
      <TextInput
        placeholder="Phone number, username or email"
        style={css.input}
      />
      <TextInput
        placeholder="Password"
        style={css.input}
        password={true}
        secureTextEntry={true}
      />
      <Text style={css.link}>Forgot password?</Text>
      <TouchableOpacity style={css.btn}>
        <Text style={{ textAlign: "center", color: "white" }}>Log In</Text>
      </TouchableOpacity>
      <Text
        style={{
          color: "gray",
          textAlign: "center",
          marginTop: 30,
          fontSize: 12,
        }}
      >
        OR
      </Text>
      <View
        style={{ flexDirection: "row", marginTop: 30, marginBottom: "auto" }}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require("../assets/download-removebg-preview.png")}
            style={{ width: 30, height: 30, marginLeft: 60 }}
          />
          <Text
            style={{
              color: "#0096FF",
              textDecorationLine: "underline",
              marginLeft: 5,
            }}
          >
            Continue as
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text style={{ textAlign: "center", marginRight: 5 }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={signUp}>
          <Text style={{ color: "#0096FF", textDecorationLine: "underline" }}>
            Sign up.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  img: {
    width: 200,
    height: 100,
    objectFit: "contain",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 40
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f7f7f7",
    borderWidth: 1,
    borderColor: "silver",
    borderRadius: 5,
    marginBottom: 15,
  },
  link: {
    color: "#0096FF",
    textDecorationLine: "underline",
    textAlign: "right",
  },
  btn: {
    backgroundColor: "#0096FF",
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 30,
  },
});

export default Login;
