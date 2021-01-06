import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './HomeScreen.js';
export default function App() {
  return (
    <View style={{flex: 1}}>
        <HomeScreen />
    </View>
  );
}
