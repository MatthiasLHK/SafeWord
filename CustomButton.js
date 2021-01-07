import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function CustomButton(props) {
    return(
        <TouchableOpacity style={props.style} onPress={props.action}>
            <Text style={textStyle.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const textStyle = StyleSheet.create({
    text: {
        fontFamily: 'serif',
        fontSize: 25
    }
});

export default CustomButton;
