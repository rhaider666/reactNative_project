import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Item } from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer';

const ListView = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
    // let l = ['a', 'b', 'c', 'd']
    // setList(l)
  }, [])

  useEffect(() => {
    console.log(list)
  }, [list])

  //this provided link does not give proper reponse
  const fetchData = async () => {
    try {
      const response = await fetch('https://hisocars.techinnsoft.com/api/Booking/get-listings');
      const data = await response.json();
      //console.log(data.ClassName)
      let l = []
      l.push(data)
      setList(l);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <View>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <Text style={{ color: 'black', fontSize: 25 }}>{item.ClassName}</Text>
            <Text style={{ color: 'dodgerblue', fontSize: 20 }}>{item.Message}</Text>
          </>
        )}
      />
    </View>
  )
}

export default ListView

const styles = StyleSheet.create({})