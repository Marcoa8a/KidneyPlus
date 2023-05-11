import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import screen from '../utils/screenNames';

import Main from '../screens/Main';
import Welcome from '../screens/Welcome';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import Home from '../screens/HomeScreen';
import Emergency from "../screens/EmergencyContactScreen";
import Create from "../screens/CreateContactScreen";
import Chat from "../screens/ChatScreen";
import Record from "../screens/RecordsScreen";
import Notification from "../screens/Notifications";
import RealTime from "../screens/RealTimeScreen";
import EditProfile from "../screens/EditProfileScreen";
import Diagnostic from "../screens/DiagnosticScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={screen.welcome}
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen 
                name={screen.welcome}
                component={Welcome}
            />
            <Stack.Screen 
                name={screen.login}
                component={Login}    
            />
            <Stack.Screen 
                name={screen.signup}
                component={Signup}
            />
            <Stack.Screen
                name={screen.main}
                component={Main}
            />
            <Stack.Screen
                name={screen.home}
                component={Home}
            />
            <Stack.Screen 
                name={screen.emergency}
                component={Emergency}
            /> 
            <Stack.Screen 
                name={screen.create}
                component={Create}
            />
            <Stack.Screen 
                name={screen.chat}
                component={Chat}
            />
            <Stack.Screen 
                name={screen.record}
                component={Record}
            />
            <Stack.Screen 
                name={screen.notification}
                component={Notification}
            />
            <Stack.Screen 
                name={screen.realTime}
                component={RealTime}
            />
            <Stack.Screen 
                name={screen.editprofile}
                component={EditProfile}
            />
            <Stack.Screen 
                name={screen.diagnostic}
                component={Diagnostic}
            />
        </Stack.Navigator>
    );
};

export default AppStack;