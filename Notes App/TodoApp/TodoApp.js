import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export default function Todo() {
  const [todo, setTodo] = useState(['']);

  const deleteTodo = key => {
    setTodo(prevTodo => {
      return prevTodo.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 4) {
      setTodo(prevTodo => {
        return [{text: text, key: Math.random().toString()}, ...prevTodo];
      });
    } else {
      Alert.alert('OOPS!', 'Note must be over 4 character long.', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({item}) => (
                <TodoItem item={item} deleteTodo={deleteTodo} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
