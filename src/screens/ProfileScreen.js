import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export const HomeScreen = ({ navigation }) => (
    <Background>
        <Logo />
        <Header>Preguntandonos App</Header>

        <Paragraph>
            Perfil de Usuarios!!!
    </Paragraph>
    </Background>
);

export default memo(HomeScreen);