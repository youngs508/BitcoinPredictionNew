import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
function Header({ navigation, label, image, caption }) {

    return (
        <View style={{ width: '100%', borderWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'#C1E1C5' }}>
            <View style={{right: -20}}>
                <Text style={styles.labelFont}>
                    {label}
                </Text>
                <Text> {caption} </Text>
            </View>
            {
                (image == "Correlation") ?
                    <Image style={{ width: 35, height: 35, tintColor: '#009688', left: -20 }} source={require('../images/graph-line.png')} />
                    : (image == "Prediction") ?
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
    },
    predictedContainerLabel: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',

    },
});

export default Header;