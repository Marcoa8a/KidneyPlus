import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import screen from '../utils/screenNames';

import Main from '../screens/Main';
import Welcome from '../screens/Welcome';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';

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
        </Stack.Navigator>
    );
};

export default AppStack;