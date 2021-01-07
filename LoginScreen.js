import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import background from './assets/Android-Login.png';
import AppStylesheet from './AppStylesheet.js';
import CustomButton from './CustomButton.js';

export default function LoginScreen(props) {
    return (
        <ImageBackground source={background} style={AppStylesheet.image}>

            <CustomButton style={styles.email} title='    email    ' />

            <CustomButton style={styles.password} title='    password    ' />

            <CustomButton style={styles.submit} title='submit' />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    email: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        top: 100,
    },
    password: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        top: 200,
    },
    submit: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        top: 300,
    }
})
