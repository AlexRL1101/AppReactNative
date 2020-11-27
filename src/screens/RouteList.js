import React from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import CreateUserScreen from "./CreateUserScreen";
import UserDetailScreen from "./UserDetailScreen";
import UsersList from "./UsersList";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#621FF7",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="UsersList"
                component={UsersList}
                options={{ title: "Lista de Preguntas" }}
            />
            <Stack.Screen
                name="CreateUserScreen"
                component={CreateUserScreen}
                options={{ title: "Nueva Pregunta" }}
            />
            <Stack.Screen
                name="UserDetailScreen"
                component={UserDetailScreen}
                options={{ title: "Detalles" }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}