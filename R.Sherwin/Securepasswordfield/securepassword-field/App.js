import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const PasswordInputExample = () => {
  const [password, setPassword ] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
      />
      {}
      <Text style={styles.displayText}>Password Length: {password.length}</Text>
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

export default PasswordInputExample;