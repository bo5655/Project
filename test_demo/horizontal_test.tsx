import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';

const data = Array.from({ length: 20 }, (_, i) => ({ key: i.toString(), title: `Item ${i + 1}` }));

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const App = () => {
  const [horizontal, setHorizontal] = useState(false);

  const toggleHorizontal = () => {
    setHorizontal(!horizontal);
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Horizontal" onPress={toggleHorizontal} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal={horizontal}
        extraData={horizontal}
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
