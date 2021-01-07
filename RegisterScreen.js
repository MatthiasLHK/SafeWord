import React from 'react';
import { Text, View, ImageBackground, Image, StyleSheet } from 'react-native';
import AppStylesheet from './AppStylesheet.js';
import background from './assets/Android-Register.png';
import CustomButton from './CustomButton.js';

export default function RegisterScreen({navigation}) {
    return (
        <ImageBackground source={background} style={AppStylesheet.image}>

            <CustomButton style={styles.email1} title='                email                ' />

            <CustomButton style={styles.email2} title='        re-enter email        ' />

            <CustomButton style={styles.password1} title='            password            ' />

            <CustomButton style={styles.password2} title='    re-enter password    ' />

            <CustomButton style={styles.confirm} title='    confirm    ' />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    email1: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        top: 80,
    },
    email2: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        top: 100,
    },
    password1: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        top: 120,
    },
    password2: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        top: 140,
    },
    confirm: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        top: 240,
    }
})
