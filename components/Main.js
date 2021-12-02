import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {useEffect} from "react";
import Database from '../Database.js'
import {LinearGradient} from "expo-linear-gradient";

const Main = ({navigation}) => {

    useEffect(() => {
        Database.createTable()
    }, [])

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={['#bbbbbb', '#eeeeee']}
        >
            <TouchableOpacity
                style={style.main}
                onPress={() => navigation.navigate('ListOfAlarms')}
            >
                <Text style={style.firstText}>Alarm native app</Text>
                <Text style={style.secondText}>Tap to start!</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstText: {
        color: '#02C8A7',
        fontSize: 56,
        fontWeight: '700',
        textAlign: 'center'
    },
    secondText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: '700'
    },
})

export default  Main