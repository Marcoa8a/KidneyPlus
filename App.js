import React, {useEffect, useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';

export default function App() {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppStack />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}