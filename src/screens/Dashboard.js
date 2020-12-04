import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";

const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Preguntandonos App</Header>
    <Paragraph>
      ¿Desea salir de la app?
    </Paragraph>
    <Button mode="outlined" onPress={() => logoutUser()}>
      Salir
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate("ListQuestion")} >
      Cancelar
    </Button>
  </Background>
);

export default memo(Dashboard);
