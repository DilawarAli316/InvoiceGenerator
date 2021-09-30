import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.12,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    // color: 'white',
    fontSize: 23,
  },
});
