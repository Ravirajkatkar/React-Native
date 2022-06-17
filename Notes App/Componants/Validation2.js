import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default function Validation2() {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add something............."
        onChangeText={ChangeHandler}
      />
      <Text style={styles.text}>FIRST NAME :</Text>
      <TextInput
        placeholder="Enter First Name"
        style={[styles.container]}
        validationSchema={ReviewSchema}
        onChangeText={value => this.setState({firstName: value.trim()})}
      />

      <Text style={styles.text}>LAST NAME :</Text>
      <TextInput
        placeholder="Enter Last Name"
        style={[styles.container]}
        onChangeText={value => this.setState({lastName: value.trim()})}
      />

      <Text style={styles.text}>ADDRESS :</Text>
      <TextInput
        placeholder="Enter Address"
        style={[styles.container]}
        onChangeText={value => this.setState({address: value.trim()})}
      />

      <Text style={styles.text}>CITY :</Text>
      <TextInput
        placeholder="City"
        style={styles.container}
        onChangeText={value => this.setState({city: value.trim()})}
      />

      <Text style={styles.text}>STATE :</Text>
      <TextInput
        placeholder="State"
        style={styles.container}
        onChangeText={value => this.setState({state: value.trim()})}
      />

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
