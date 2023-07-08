import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListView from './ListView';
import Home from './Home';
import Counter from './Counter';

const Stack = createNativeStackNavigator();

const Dishboard = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Counter" component={Counter} />
    </Stack.Navigator>
  )
}

export default Dishboard

const styles = StyleSheet.create({})