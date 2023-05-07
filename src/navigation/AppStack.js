import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screen from "../utils/screenNames";

import Main from "../screens/Main";
import Welcome from "../screens/Welcome";
import Login from "../screens/LoginScreen";
import Signup from "../screens/SignupScreen";
import Emergency from "../screens/EmergencyContactScreen";
import Create from "../screens/CreateContactScreen";
import Chat from "../screens/ChatScreen";
import Record from "../screens/RecordsScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screen.record}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={screen.welcome} component={Welcome} />
      <Stack.Screen name={screen.login} component={Login} />
      <Stack.Screen name={screen.signup} component={Signup} />
      <Stack.Screen name={screen.emergency} component={Emergency} />
      <Stack.Screen name={screen.create} component={Create} />

      <Stack.Screen name={screen.chat} component={Chat} />
      <Stack.Screen name={screen.record} component={Record} />
    </Stack.Navigator>
  );
};

export default AppStack;
