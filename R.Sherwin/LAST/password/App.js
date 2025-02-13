import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';

const SubmitExample = () => {
  const [text, setText] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
   

  const handleSubmit = () => {
    Alert.alert('Submitted Text: ', text);
  };

  return (
    <View>
     <TextInput
        style={styles.container}
        value = " AMC-WEEK5-ACTIVITY "
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter First Name"
        onChangeText={(value) => setFname(value)}
        value={fname} 
        autoFocus={true}
      />
       <TextInput
        style={styles.input}
        placeholder="Enter Last Name"
        onChangeText={(value) => setLname(value)}
        value={lname} 
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        onChangeText={(text) => setPhone(text)}
        value={phone} 
      />
       <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email} 
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        value={password}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
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