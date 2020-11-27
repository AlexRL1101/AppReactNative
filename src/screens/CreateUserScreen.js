import React, { memo,useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import firebase from "firebase/app";
import "firebase/firestore";
import fire from "../database/firebase";

const AddUserScreen = ({ navigation }) => {
  let user = fire.user.currentUser;

  const initalState = {
    id_user: user.uid,
    name: user.displayName,
    mail: user.email,
    materia: "",
    question: "",
    file: "",
  };
  
  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };
  
  // const data = firebase.firestore.FieldValue.serverTimestamp();

  const saveNewUser = async () => {
    if (state.materia === "") {
      alert("Por favor, selecciona la materia");
    } else {
      
      try {
        await fire.db.collection("question").add({
          id_user: state.id_user,
          name: state.name,
          materia: state.materia,
          question: state.question,
          mail: state.mail,
          file: state.file,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });

        navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Materia"
          onChangeText={(value) => handleChangeText(value, "materia")}
          value={state.materia}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Question"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "question")}
          value={state.question}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="File"
          onChangeText={(value) => handleChangeText(value, "file")}
          value={state.file}
        />
      </View>

      <View style={styles.button}>
        <Button title="Guardar Pregunta" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(AddUserScreen);
