import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HandleInputExample = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          onChangeText={(value) => setText(value)}
          value={text}
        />
      </View>
      <Text style={styles.displayText}>You typed: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'Top-center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
    color:"blue",
  },
  input: {
    flex: 1,
    height: 40,
  },
  displayText: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default HandleInputExample;