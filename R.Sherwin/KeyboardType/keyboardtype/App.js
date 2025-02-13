import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const KeyboardType = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email} 
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        onChangeText={(text) => setPhone(text)}
        value={phone} 
      />
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
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default KeyboardType;