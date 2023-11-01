import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Register = ({navigation}) => {
  const login = () => navigation.navigate('Login')
  return (
    <View style={css.container}>
      <Image
        source={require("../assets/Instagram_logo.svg.png")}
        style={css.img}
      />
      <TextInput
        placeholder="Mobile Number or Email"
        style={css.input}
      />
      <TextInput
        placeholder="Full Name"
        style={css.input}
      />
      <TextInput
        placeholder="Username"
        style={css.input}
      />
      <TextInput
        placeholder="Password"
        style={css.input}
        password={true}
        secureTextEntry={true}
      />
      <TouchableOpacity style={css.btn}>
        <Text style={{ textAlign: "center", color: "white" }}>Sign Up</Text>
      </TouchableOpacity>
      
      <View
        style={{
          flexDirection: "row",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text style={{ textAlign: "center", marginRight: 5 }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={login}>
          <Text style={{ color: "#0096FF", textDecorationLine: "underline" }}>
            Log In.
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
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 40,
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
    marginBottom: 'auto'
  },
});

export default Register;
