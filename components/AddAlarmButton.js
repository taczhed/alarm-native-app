import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const AddAlarmButton = ({navigation, destination, onPress}) => {

    const onPressHandler = () => {
        if (destination) navigation.navigate(destination)
        else {
            onPress()
        }
    }

    return(
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('rgba(29, 190, 245, 0.6)', false)}
            onPress={() => onPressHandler()}
        >
            <LinearGradient
                colors={['rgba(255, 255, 255, 0.40)', 'rgba(255, 255, 255, 0.15)']}
                style={style.buttonBody}
            >
                <AntDesign
                    name="plus"
                    size={36}
                    color="white"
                />
            </LinearGradient>
        </TouchableNativeFeedback>
    )
}

const style = StyleSheet.create({
    buttonBody: {
        width: 86,
        height: 86,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AddAlarmButton