import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Home from './src/Home'
import ListView from './src/ListView';
import Dishboard from './src/Dishboard';

import { Provider } from 'react-redux';
import store from './src/Redux/Store';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Dishboard'>
          <Tab.Screen
            name="Dishboard"
            component={Dishboard}
            options={{
              headerTitle: 'Home',
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, focused }) => (<Icon name='home' size={focused ? 25 : 20} color={color} />)
            }}
          />
          
          <Tab.Screen
            name="ListView"
            component={ListView}
            options={{
              tabBarIcon: ({ color, focused }) => (<Icon name='list' size={focused ? 25 : 20} color={color} />)
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({})