import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('');

  const ChangeHandler = val => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add something............."
        onChangeText={ChangeHandler}
      />
      <Button onPress={() => submitHandler(text)} title="ADD" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
