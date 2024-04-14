import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';


function TableHeader({ navigation, label }) {
    return (
        <View style={styles.tableHeader}>
            <View>
                <Text style={styles.titleFont}>Date</Text>
            </View>
            <View>
                <Text style={styles.titleFont}>Predicted</Text>
            </View>
            <View>
                <Text style={styles.titleFont}>Market</Text>
            </View>
            <View>
                <Text style={styles.titleFont}>Difference</Text>
            </View>
            <View>
                <Text style={styles.titleFont}>Accuracy</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    titleFont: {
        fontSize: 20,
        textAlign: 'center',
    },
    label: {
        flexDirection: 'row',
    },
    tableHeader: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        width: '100%',
        height: '10%',
        backgroundColor: '#DBDBDB',
    },
});

export default TableHeader;