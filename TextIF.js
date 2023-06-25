import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

function TextIF() {
  const [text, setText] = useState('');

  const handleChangeText = (inputText) => {
    setText(inputText);
  }

  return (
    <View style={styles.textBox}>
      <TextInput
        style={styles.textBox}
        onChangeText={handleChangeText}
        value={text}
      />
      <Text style={styles.textBox}>You entered: {text}</Text>
    </View>
  );
}





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

export default TextIF;




