import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
// import {
//   emailValidator,
//   passwordValidator,
//   nameValidator
// } from "../core/utils";
// import { signInUser } from "../api/auth-api";
import Toast from "../components/Toast";

const RegisterScreen = ({ navigation }) => {
  // const [name, setName] = useState({ value: "", error: "" });
  // const [email, setEmail] = useState({ value: "", error: "" });
  // const [password, setPassword] = useState({ value: "", error: "" });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // const _onSignUpPressed = async () => {
  //   if (loading) return;

  //   const nameError = nameValidator(name.value);
  //   const emailError = emailValidator(email.value);
  //   const passwordError = passwordValidator(password.value);

  //   if (emailError || passwordError || nameError) {
  //     setName({ ...name, error: nameError });
  //     setEmail({ ...email, error: emailError });
  //     setPassword({ ...password, error: passwordError });
  //     return;
  //   }

  //   setLoading(true);

  //   const response = await signInUser({
  //     name: name.value,
  //     email: email.value,
  //     password: password.value
  //   });

  //   if (response.error) {
  //     setError(response.error);
  //   }

  //   setLoading(false);
  // };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("HomeScreen")} />

      <Logo />

      <Header>Registrate</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        secureTextEntry
        autoCapitalize="none"
      />

      <Button
        mode="contained"
        style={styles.button}
      >
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Ya tienes cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} >
          <Text style={styles.link}>Inciar Sesión</Text>
        </TouchableOpacity>
      </View>

      <Toast/>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary
  },
  button: {
    marginTop: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(RegisterScreen);