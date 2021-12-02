import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import AddAlarmButton from "./AddAlarmButton"
import { AntDesign } from "@expo/vector-icons";
import Database from '../Database.js'
import {LinearGradient} from "expo-linear-gradient";

const AddAlarmView = ({navigation}) => {
    return (
        <LinearGradient
            style={style.background}
            colors={['#3520a2', '#6550d2']}
        >
            <View style={style.content}>
                <Text style={style.addText}>Press + button to add alarm!</Text>
                <AntDesign
                    name="arrowdown"
                    size={148
                    }
                    color="white"
                />
            </View>
            <View style={style.buttonContainer}>
                <AddAlarmButton
                    onPress={Database.add}
                />
            </View>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    background: {
        backgroundColor: '#4530b2',
        flex: 1,
    },
    buttonContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    content: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addText: {
        fontSize: 84,
        color: "white"
    }
})

export default AddAlarmView