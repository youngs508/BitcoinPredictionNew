import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
function Header({ navigation, label, image, caption }) {

    return (
        <View style={{ width: '100%', borderWidth: 1, flexDirection: 'row', borderRadius: 5, justifyContent: 'space-between' }}>
            <View style={{right: -20, height: 40}}>
                <Text style={styles.labelFont}>
                    {label}
                </Text>
                <Text> {caption} </Text>
            </View>
            {
                (label == "Prediction") ?
                    <Image style={{ width: 35, height: 35, tintColor: '#009688', left: -20 }} source={require('../images/graph-line.png')} />
                    : (label == "Correlation") ?
                        <Image style={{ width: 35, height: 35, tintColor: '#009688', left: -20 }} source={require('../images/graph-bar.png')} />
                        :
                        <Image style={{ width: 35, height: 35, tintColor: '#009688', left: -20 }} source={require('../images/broadcast.png')} />
            }


        </View>
    );
}
const styles = StyleSheet.create({
    labelFont: {
        fontSize: 18,
    },
    label: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        borderBottomWidth: 1
    },
    predictedContainerLabel: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        width: '100%',

    },
});

export default Header;