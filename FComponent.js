import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button } from 'react-native';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
   <View>
      <Text styles={styles.textBox} >Count: {count}</Text>
      <Button onPress={increment} title='Increment' styles={styles.textBox}  />
      
      
      </View>
  );
};
const styles=StyleSheet.create({
  textBox:{
    color:'pink',
    fontSize:40 ,
    margin:80,
    padding:0, 
    textAlign:'center',
    textAlignVertical:'center',
    margin:30, 
    
  }
});
export default Counter;
