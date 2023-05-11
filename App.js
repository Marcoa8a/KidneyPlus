import React, {useEffect, useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';

import Main from './src/screens/Main'

export default function App() {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppStack />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}