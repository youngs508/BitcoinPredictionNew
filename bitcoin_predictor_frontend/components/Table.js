import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';


function Table({ navigation, label, predictedPrice, actualPrice, difference, accuracy }) {
    return (
        <View style={styles.predictedContainerLabel}>
            <View>
                <Text style={styles.titleFont}>
                    {label}
                </Text>
            </View>
            <View>
                <Text style={styles.titleFont}>
                    {predictedPrice}
                </Text>
            </View>
            <View>
                <Text style={styles.titleFont}>
                    {actualPrice}
                </Text>
            </View>
            <View>
                <Text style={styles.titleFont}>
                    {difference}
                </Text>
            </View>
            <View>
                <Text style={styles.titleFont}>
                    {accuracy}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    titleFont: {
        fontSize: 18,
        left: -10
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
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        width: '100%',
        height: '30%'
    },
});

export default Table;