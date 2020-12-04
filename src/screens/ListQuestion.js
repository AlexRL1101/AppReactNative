import React, { useState, useEffect } from "react";
import { ListItem, SearchBar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from 'react-native-paper';

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
            {/* <Button
                onPress={() => props.navigation.navigate("CreateUserScreen")}
                title="Crear Nueva Pregunta"
            /> */}

            <SearchBar
                round
                searchIcon={{ size: 24 }}
                // onChangeText={(text) => searchFilterFunction(text)}
                // onClear={(text) => searchFilterFunction('')}
                placeholder="Type Here..."
                // value={search}
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
                        <Avatar.Image
                            source={
                                // {
                                // uri:
                                //     "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                                // }
                                require('../assets/profile.jpg')
                            }
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