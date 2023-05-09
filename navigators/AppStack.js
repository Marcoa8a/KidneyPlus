import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen from '../utils/screenNames';

import Notifications from '../screens/Notifications';
import RealTimeScreens from '../screens/RealTimeScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName={screen.Notification} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screen.Notification} component={Notifications} />
            <Stack.Screen name={screen.RealTime} component={RealTimeScreens}/>
        </Stack.Navigator>
    );
};

export default AppStack;