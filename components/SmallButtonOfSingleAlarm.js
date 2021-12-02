import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const SmallButtonOfSingleAlarm = ({text, isDayActive, index, toggleDayChange}) => {

    const onPressHandler = () => (toggleDayChange(index), setIsActive(prev => !prev))
    const [isActive, setIsActive] = useState(isDayActive)

    return(
        <TouchableOpacity
            style={{
                ...style.buttonBody,
                backgroundColor: isActive ? 'rgba(29, 190, 245, 0.6)' : 'rgba(255, 255, 255, 0.15)'
            }}
            onPress={() => onPressHandler()}
        >
            <Text style={{
                ...style.buttonText,
                color: isActive ? 'white' : 'white'
            }}
            >{text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    buttonBody: {
        padding: 12,
        margin: 2,
        borderRadius: 20,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default SmallButtonOfSingleAlarm