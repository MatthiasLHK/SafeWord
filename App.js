import React from 'react';
import HomeScreen from './HomeScreen.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen.js';
import RegisterScreen from './RegisterScreen.js';

export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}
