import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import SmallButtonOfSingleAlarm from "./SmallButtonOfSingleAlarm";
import { Animated } from 'react-native';
import Database from "../Database";
import {LinearGradient} from "expo-linear-gradient";

const daysTemplate = ['Pn', 'Wt', 'Sr', 'Cz', 'Pt', 'Sb', 'Nd']

const SingleAlarm = ({hour, enabled, days, id, handleArrayOfAlarmsChange}) => {

    const [drawerHeight] = useState(new Animated.Value(10))

    const [daysArray, setDaysArray] = useState(days.split('|'))
    const [isSwitchEnabled, setIsSwitchEnabled] = useState(enabled === 1)
    const [isOpen, setIsOpen] = useState(false)

    const handleSwitchToggle = () => setIsSwitchEnabled(prev => !prev)
    const toggleDayChange = (dayIndex) => {
        setDaysArray(prev => {
            let previous = [...prev]
            previous[dayIndex] = previous[dayIndex] === "0" ? "1" : "0"
            return previous
        })
    }
    const toggleDrawer = () => {
        let toValue
        if (isOpen) toValue = 10
        else toValue = 148
        Animated.spring(drawerHeight, {
            toValue: toValue,
            useNativeDriver: false,
        }).start()
        setIsOpen(prev => !prev)
    }

    const displayDays = () => {
        const days = daysTemplate.map((dayText, i) => daysArray[i] === "1" ? `${dayText}, ` : null)
        let nullCounter = 0
        days.forEach(day => {if (day == null) nullCounter++})
        if (nullCounter === 7) return "Brak dni"
        else return days
    }

    return (
        <LinearGradient
            style={style.background}
            colors={['rgba(255, 255, 255, 0.30)', 'rgba(255, 255, 255, 0.15)']}
        >
            <View style={style.alarm}>
                <View>
                    {/*<Text style={{color: "white", fontSize: 18, marginLeft: 8}}>{id}</Text>*/}
                    <Text style={style.hour}>{hour}</Text>
                    <Text style={{color: "white", fontSize: 18, marginLeft: 8}}>
                        {
                            displayDays()
                        }
                    </Text>
                </View>
                <View style={style.rightPanel}>
                    <View style={style.rightPanelChild}>
                        <Switch
                            value={isSwitchEnabled}
                            onValueChange={handleSwitchToggle}
                            thumbColor={ isSwitchEnabled ? "#1dbef5" : "#ffffff" }
                        />
                    </View>
                    <View style={style.rightPanelChild}>
                        <TouchableOpacity
                            style={style.smallButtonBody}
                            onPress={() => {
                                Database.remove(id)
                                handleArrayOfAlarmsChange(id)
                            }}
                        >
                            <MaterialIcons
                                name="delete"
                                size={28}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.rightPanelChild}>
                        <TouchableOpacity
                            style={style.smallButtonBody}
                            onPress={() => toggleDrawer()}
                        >
                            <MaterialIcons
                                name={!isOpen ? "arrow-drop-down" : "arrow-drop-up"}
                                size={28}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Animated.View style={{
                height: drawerHeight,
                overflow: "hidden",
                alignItems: 'center',
                justifyContent: "center",
            }} >
                    <View style={{flexDirection: 'row', marginTop: 60}}>
                        {daysArray.map((isActive, i) => (
                            <SmallButtonOfSingleAlarm
                                key={daysTemplate[i]}
                                text={daysTemplate[i]}
                                index={i}
                                isDayActive={isActive === "1"}
                                toggleDayChange={toggleDayChange}
                            />
                        ))}
                    </View>
            </Animated.View>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    background: {
        padding: 8,
        borderRadius: 20,
        marginVertical: 8
    },
    alarm: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        minHeight: 148
    },
    rightPanel: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hour: {
        fontSize: 84,
        color: '#ffffff',
        paddingVertical: 0
    },
    rightPanelChild: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallButtonBody: {
        padding: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 26
    }
})

export default SingleAlarm