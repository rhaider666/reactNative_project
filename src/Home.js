import { StyleSheet, View } from 'react-native'
import React from 'react'
import {Button,Text } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome'
 
const Home = ({navigation}) => {
  return (
    <View>
      <Text style={{textAlign:'center'}} variant='h2' color='black'>Welcome To</Text>
      <Text style={{textAlign:'center'}} variant='h3' color='blue'>Byte Tech Solution</Text>
      <View style={{ marginHorizontal: '30%',marginVertical:'10%' }}>
        <Button variant="contained" title="Counter" onPress={() => {navigation.navigate('Counter') }} />
      </View>
    </View>
  )
}


export default Home

const styles = StyleSheet.create({})