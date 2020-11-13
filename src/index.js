import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  HistoryScreen,
  ProfileScreen,
  PayScreen,
  QuestionsDashboard,
  QuestionScreen
} from "./screens";

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    AuthLoadingScreen,
    HistoryScreen,
    ProfileScreen,
    PayScreen,
    QuestionsDashboard,
    QuestionScreen
  },
  {
    initialRouteName: "QuestionScreen",
    headerMode: "none"
  }
);

export default createAppContainer(Router);