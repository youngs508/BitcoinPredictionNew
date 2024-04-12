import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
function FilterButton({ navigation, label}) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.titleFont}>{label}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    titleFont: {
        fontSize: 22,
    },
    button:{
        borderWidth: 1,
        height: '90%', 
        width:'30%',
        backgroundColor: '#DBDBDB', 
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
    }
});

export default FilterButton;