import React, { useEffect, useState } from "react";
import { Component } from "react";
import { Text, View } from "react-native";
import firebaseService from "../../../services/firebase";
import styles from './styles';

class Ap extends Component {
  render() {
    return (
    <View style={{ flex:2 }}>
      <Text>Hola</Text>
    </View>
    );
  }
}

const Main = () => {

  const [userName, setUserName] = useState('')
  useEffect(() => {
    (
      async () => {
        try {
          const userData = await firebaseService.readUserData()
          setUserName(userData)
        } catch (e) {
          alert(e)
        }
      }
    )()
  },[])

  return (
    <View style={styles.container}>
      <Text>Que tal?</Text>
      <View style={styles.containerRed}>
        <Text style={styles.colorTextWelcome}>{`Welcome ${userName} !!!`}</Text>
      </View>
      <View style={styles.containerBlue}>
        <Text>Tarde</Text>
      </View>
    </View>
  );
}

export default Main;