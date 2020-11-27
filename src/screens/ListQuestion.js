import React, { useState, useEffect } from "react";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native";

import firebase from "../database/firebase";

const UserScreen = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        firebase.db.collection("question").onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.docs.forEach((doc) => {
                const { name, materia, question, createdAt } = doc.data();
                users.push({
                    id: doc.id,
                    materia,
                    name,
                    question,
                    createdAt,
                });
            });
            setUsers(users);
        });
    }, []);

    return (
        <ScrollView>
            <Button
                onPress={() => props.navigation.navigate("CreateUserScreen")}
                title="Crear Nueva Pregunta"
            />

            {users.map((user) => {
                return (
                    <ListItem
                        key={user.id}
                        bottomDivider
                        onPress={() => {
                            props.navigation.navigate("UserDetailScreen", {
                                userId: user.id
                            });
                        }}
                    >
                        <ListItem.Chevron />
                        <Avatar
                            source={{
                                uri:
                                    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                            }}
                            rounded
                        />
                        <ListItem.Content>
                            <ListItem.Title>{user.materia}</ListItem.Title>
                            <ListItem.Subtitle>{user.question}</ListItem.Subtitle>
                            <ListItem.Subtitle style={{ color: '#5f9ea0' }}>{user.name}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                );
            })}
        </ScrollView>
    );
};

export default UserScreen;