import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import FilterButton from '../components/FilterButton';
import Result from '../components/Result';
import Header from '../components/Header';
function PredictorScreen({ navigation }) {
    return (
        <View style={styles.pageOrganizer}>

            <View style={styles.header}>
                <Text style={styles.titleFont}>Marchine Learning for Bitcoin Price Prediction</Text>
            </View>

            <View style={styles.grapOrganizer}>

                <View style={styles.predictorView}>

                    <View style={styles.predictorBackground}>
                        {
                            //Prediction 
                        }
                        <Header label="Prediction" caption="Bitcoin price prediction via linear regression" />
                        {
                            //Prediction  
                        }
                        <View style={styles.filter}>
                            <FilterButton label="Monthly" />
                            <FilterButton label="Weekly" />
                            <FilterButton label="Yearly" />
                        </View>
                    </View>
                    <View style={styles.predictionContainer}>
                        {
                            //Analysis 
                        }
                        <Header label="Analysis" caption="Bitcoin price prediction via linear regression" />
                        {
                            //Prediction Analysis 
                        }
                        <Result label="Predicted Price" caption="Bitcoin price prediction via linear regression" value="$12,345" />
                        <Result label="Market Price" caption="Bitcoin price prediction via linear regression" value="$12,345" />
                        <Result label="Accuracy" caption="Bitcoin price prediction via linear regression" value="$12,345" />
                        <Result label="Difference" caption="Bitcoin price prediction via linear regression" value="$12,345" />

                    </View>
                </View>

                <View style={styles.correlationView}>

                    <View style={styles.correlation}>
                        {
                            //Correlation 
                        }
                        <Header label="Correlation" caption="Correlation Ethereum vs Bitcoin" image="graph-bar.png" />
                        {
                            //Correlation 
                        }
                        <View style={styles.containerHeader}>
                            <Text style={styles.labelFont}>
                                Correlation Ethereum vs Bitcoin
                            </Text>
                        </View>
                    </View>
                    <View style={styles.correlation}>
                        <View style={styles.containerHeader}>
                            <Text style={styles.labelFont}>
                                Correlation S&P 500 vs Bitcoin
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        width: '95%',
        height: '7%',
        backgroundColor: '#FCCB00',
    },
    titleFont: {
        fontSize: 30,
        top: 5
    },
    predictionContainer: {
        alignSelf: 'flex-start',
        width: '95%',
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10
    },

    labelFont: {
        fontSize: 18,
    },
    pageOrganizer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    correlationView: {
        height: '100%',
        width: '48%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    predictorView: {
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    correlation: {
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        height: '45%',
    },
    grapOrganizer: {
        flexDirection: 'row',
        height: '90%',
        width: '95%',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1
    },
    predictorBackground: {
        borderWidth: 1,
        borderRadius: 10,
        width: '95%',
        height: '55%',

    },
    containerHeader: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignSelf: 'center',
        alignItems: 'flex-start',
        backgroundColor: "#419BFE"

    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "#419BFE"

    }
});

export default PredictorScreen;