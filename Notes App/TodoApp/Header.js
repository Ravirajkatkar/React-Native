import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>NOTE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 25,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '800',
    fontSize: 40,
    marginBottom: 1,
    fontStyle: 'italic',
  },
});
