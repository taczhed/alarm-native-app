import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AddAlarmButton from "./AddAlarmButton";
import SingleAlarm from "./SingleAlarm";
import Database from '../Database.js'
import { useIsFocused } from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";

const ListOfAlarms = ({navigation}) => {

    const [arrayOfAlarms, setArrayOfAlarms] = useState([])
    const isFocused = useIsFocused()

    useEffect(async () => {
        let data = await Database.getAll()
        data = JSON.parse(data)
        setArrayOfAlarms(data.rows._array)
    }, [isFocused])

    const handleArrayOfAlarmsChange = (id) => {
        setArrayOfAlarms(prev => {
            return prev.filter(obj => obj.id !== id)
        })
    }

    return(
        <LinearGradient
            style={style.background}
            colors={['#3520a2', '#6550d2']}
        >
            <View style={style.content}>
                <FlatList
                    data={arrayOfAlarms}
                    extraData={arrayOfAlarms}
                    renderItem={({item}) =>
                        <SingleAlarm
                            key={item.id}
                            enabled={item.enabled}
                            hour={item.hour}
                            days={item.days}
                            id={item.id}
                            handleArrayOfAlarmsChange={handleArrayOfAlarmsChange}
                        />
                    }
                />
            </View>
            <View style={style.buttonContainer}>
                <AddAlarmButton
                    navigation={navigation}
                    destination={"AddAlarmView"}
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 24
    },
    content: {
        flex: 1,
        padding: 8
    }
})

export default ListOfAlarms