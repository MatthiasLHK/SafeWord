import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import AppStylesheet from './AppStylesheet.js';
import backgroundImage from './assets/Android-HomeScreen.png';
import safe from './assets/SafeIcon.png';

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={AppStylesheet.image}>
        <Image source={safe} />
        <StatusBar style="auto" />
    </ImageBackground>
  );
}
