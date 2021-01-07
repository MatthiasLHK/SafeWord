import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ImageBackground, Image, StyleSheet } from 'react-native';
import AppStylesheet from './AppStylesheet.js';
import backgroundImage from './assets/Android-HomeScreen.png';
import safe from './assets/SafeIcon.png';
import CustomButton from './CustomButton.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function HomeScreen({navigation}) {
  return (
    <ImageBackground source={backgroundImage} style={AppStylesheet.image}>

        <Image source={safe} style={AppStylesheet.safeIcon} />

        <CustomButton style={styles.login} title='Login' action={()=>navigation.navigate('Login')}/>

        <CustomButton style={styles.register} title='Register' action={()=>navigation.navigate('Register')}/>

        <Text style={styles.text}> Made by MatthiasLHK </Text>

        <StatusBar style="auto" />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    login: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        top: 30,
    },
    register: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        top: 50
    },
    text: {
        top: 200,
        fontSize: 15,
        fontFamily: 'monospace',
    }
})
