import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const HandleInputExample = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type text here..."
        onChangeText={(value) => setText(value)}
        value={text} 
      />
      {}
      <Text style={styles.displayText}>Remaining {10 - text.length} characters</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },

  displayText: {
    mariginTop:10,
    fontSize: 18,
  }

});

export default HandleInputExample;