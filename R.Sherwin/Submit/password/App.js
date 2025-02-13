import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';

const SubmitExample = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    Alert.alert('Submitted Text: ', text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Press after typing"
        onChangeText={(value) => setText(value)}
        value={text}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
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
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
});

export default SubmitExample;