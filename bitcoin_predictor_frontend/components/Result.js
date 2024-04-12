import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
function Result({ navigation, label, value, caption }) {
    return (
        <View style={styles.predictedContainerLabel}>
            <View style={styles.label}>
                <View>
                    <Text style={styles.titleFont}>
                        {label}
                    </Text>
                    <Text> {caption} </Text>
                </View>
            </View>

            <View style={{left: -20}}>
                <Text style={styles.titleFont}>
                    {value}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    titleFont: {
        fontSize: 20,
        top: 5
    },
    label:{
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

export default Result;