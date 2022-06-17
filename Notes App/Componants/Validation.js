import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default function Valid() {
  const [Name, setName] = useState('');
  console.log(setName);
  return (
    <View>
      <Text style={styles.text}>FIRST NAME :</Text>
      <TextInput
        placeholder="Enter First Name"
        style={[styles.container]}
        onChangeText={Text => setName(Text)}
      />

      <Text style={styles.text}>LAST NAME :</Text>
      <TextInput placeholder="Enter Last Name" style={[styles.container]} />

      <Text style={styles.text}>E-mail :</Text>
      <TextInput
        placeholder="Enter E-maill"
        keyboardType="email-address"
        style={[styles.container]}
      />

      <Text style={styles.text}>MOBILE NO. :</Text>
      <TextInput
        placeholder="Enter Mobile no."
        keyboardType="numeric"
        style={[styles.container]}
      />

      <Text style={styles.text}>STATE :</Text>
      <TextInput placeholder="City" style={styles.container} />

      <Text style={styles.text}>CITY :</Text>
      <TextInput placeholder="State" style={styles.container} />

      <Button title="Update" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 8,
    marginLeft: 20,
    marginRight: 20,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  text: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 25,
  },
});
