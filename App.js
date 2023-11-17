import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Scan from './src/screens/Scan';
import Navigation from './src/screens/Navigation';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Navigation" component={Navigation} options={{ headerShown: false }} />
        <Stack.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


