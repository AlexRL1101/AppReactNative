import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  HistoryScreen,
  CreateUserScreen,
  UserDetailScreen,
  UsersList,
  RouterList,
  Resorce,
  ListQuestion
} from "./screens";

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
        UsersList: {
          screen: UsersList,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={38} color={tintColor} />
          }
        },
        Resorces: {
          screen: Resorce,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-download" size={38} color={tintColor} />
          }
        },
        RouterList: {
          screen: RouterList,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="ios-add-circle"
                size={48}
                color={ tintColor }
              />
            )
          }
        },
        Dashboard: {
            screen: Dashboard,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-exit" size={38} color={tintColor} />
          }
        }
      },
      {
        defaultNavigationOptions: {
          tabBarOnPress: ({ navigation, defaultHandler }) => {
            if (navigation.state.key === "Post") {
              navigation.navigate("postModal");
            } else {
              defaultHandler();
            }
          }
        },
        tabBarOptions: {
          activeTintColor: "#161F3D",
          inactiveTintColor: "#B8BBC4",
          showLabel: false
        }
      }
    ),
    CreateUserScreen: {
      screen: CreateUserScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
    // initialRouteName: "postModal"
  }
);

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none'
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: AuthLoadingScreen,
      App: AppContainer,
      Auth: Router
    },
    {
      initialRouteName: 'Loading'
    }
  )
)