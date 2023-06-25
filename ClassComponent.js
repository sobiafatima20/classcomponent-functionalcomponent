import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button } from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <View>
        <Text styles={styles.textBox}>Count: {this.state.count}</Text>
        <Button onPress={this.increment} title='Increment' styles={styles.textBox}/>
        
        </View>
    );
  }
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