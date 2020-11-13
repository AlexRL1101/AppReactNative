// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

// // import { DashboardScreen } from "../screens/Dashboard";
// // import { HistoryScreen } from "../screens/HistoryScreen";
// // import { ProfileScreen } from "./screens/ProfileScreen";
// // import { PayScreen } from "./screens/PayScreen";
// // import { QuestionScreen } from "./screens/QuestionScreen";

// export default MainStackScreens = () => {
//     const MainStack = createBottomTabNavigator()

//     const tabBarOptions = {
//         showLabel: false,
//         style: {
//             backgroundColor: "#222222",
//             paddingBottom: 12
//         }
//     }

//     const screenOptions = (({ route }) => ({
//         tabBarIcon: ({ focused }) => {
//             let iconName = "ios-Dashboard"

//             switch (route.name) {
//                 case "Home":
//                     iconName = "ios-Home";
//                     break;

//                 case "Message":
//                     iconName = "ios-chatboxes";
//                     break;

//                 case "Notification":
//                     iconName = "ios-notifications";
//                     break;

//                 case "Profile":
//                     iconName = "ios-person";
//                     break;

//                 default:
//                     iconName = "ios-Home"
//             }

//             if (route.name === "Post") {
//                 return <Ionicons name="ios-add-circle" size={48} color="#23a8d9" style={{ shadowColor: "#23a8d9", shadowOffset: { width: 0, height: 10 }, shadowRadius:10, shadowOpacity:0.3 }} />
//             }

//             return <Ionicons name={iconName} size={24} color={focused ? "#ffffff" : "#666666"} />
//         }
//     }))
 
//     return (
//         <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions} >
//             <MainStack.Screen name="Dashboard" component={DashboardScreen} />
//             <MainStack.Screen name="History" component={HistoryScreen} />
//             <MainStack.Screen name="Profile" component={ProfileScreen} />
//             <MainStack.Screen name="Pay" component={PayScreen} />
//             <MainStack.Screen name="Question" component={QuestionScreen} />
//         </MainStack.Navigator>
//     )
// }
