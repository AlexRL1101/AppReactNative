import React, { useEffect, useState } from "react";
import {
    ScrollView,
    Button,
    View,
    Alert,
    ActivityIndicator,
    StyleSheet,
} from "react-native";
import TextInput from "../components/TextDetails";

import firebase from "../database/firebase";

const UserDetailScreen = (props) => {
    const initialState = {
        id: "",
        id_user: "",
        name: "",
        mail: "",
        materia: "",
        question: "",
        file: "",
    };

    const [user, setUser] = useState(initialState);
    const [loading, setLoading] = useState(true);

    const handleTextChange = (value, prop) => {
        setUser({ ...user, [prop]: value });
    };

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection("question").doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({ ...user, id: doc.id });
        setLoading(false);
    };

    const deleteUser = async () => {
        setLoading(true)
        const dbRef = firebase.db
            .collection("question")
            .doc(props.route.params.userId);
        await dbRef.delete();
        setLoading(false)
        props.navigation.navigate("UsersList");
    };

    const openConfirmationAlert = () => {
        Alert.alert(
            "Removing the User",
            "Are you sure?",
            [
                { text: "Yes", onPress: () => deleteUser() },
                { text: "No", onPress: () => console.log("canceled") },
            ],
            {
                cancelable: true,
            }
        );
    };

    const updateUser = async () => {
        const userRef = firebase.db.collection("question").doc(user.id);
        await userRef.set({
            question: user.question,
            file: user.file,
            materia: user.materia,
            id_user: user.id_user,
            name: user.name,
            mail: user.mail,
        });
        setUser(initialState);
        props.navigation.navigate("UsersList");
    };

    useEffect(() => {
        getUserById(props.route.params.userId);
    }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <TextInput
                    placeholder="Materia"
                    autoCompleteType="username"
                    style={styles.inputGroup}
                    value={user.materia}
                    onChangeText={(value) => handleTextChange(value, "materia")}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Question"
                    autoCompleteType="username"
                    style={styles.inputGroup}
                    value={user.question}
                    onChangeText={(value) => handleTextChange(value, "question")}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Files"
                    autoCompleteType="tel"
                    style={styles.inputGroup}
                    value={user.file}
                    onChangeText={(value) => handleTextChange(value, "file")}
                />
            </View>
            <View style={styles.btn}>
                <Button
                    title="Delete"
                    onPress={() => deleteUser()}
                    color="#E37399"
                />
            </View>
            <View>
                <Button title="Update" onPress={() => updateUser()} color="#19AC52" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
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
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    btn: {
        marginBottom: 7,
    },
});

export default UserDetailScreen;