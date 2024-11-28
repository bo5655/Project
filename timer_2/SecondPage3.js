// SecondPage1.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondPage3 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>这是二级页面 3</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default SecondPage3;
