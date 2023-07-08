import { StyleSheet,View } from 'react-native'
import React from 'react'
import {Button,Text } from "@react-native-material/core";

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/Action';

const Counter = ({navigation}) => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <View>
      <Text variant='h5' style={{marginLeft:130,marginVertical:20}}>Counter : {count}</Text>
      <View style={{flexDirection:'row',width:'100%',marginLeft:100}}>
        <Button style={{margin:20}} variant="contained" title="+" onPress={() => {dispatch(increment()) }} />
        <Button style={{margin:20}} variant="contained" title="-" onPress={() => {count>0?dispatch(decrement()):null }} />
      </View>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})