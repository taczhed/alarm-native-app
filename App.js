import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "./components/Main";
import ListOfAlarms from "./components/ListOfAlarms";
import AddAlarmView from "./components/AddAlarmView";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Main"
              component={Main}
              options={{
                headerShown: false
              }}
          />

          <Stack.Screen
              name="ListOfAlarms"
              component={ListOfAlarms}
              options={{
                title: "Alarm list",
                headerStyle: {
                  backgroundColor: '#4530b2',
                },
                headerTintColor: '#eeeeee',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
          />

          <Stack.Screen
              name="AddAlarmView"
              component={AddAlarmView}
              options={{
                  headerShown: false
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
