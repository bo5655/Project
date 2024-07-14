import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const texts = [
    { text: '页面测试', initialStyle: 'smallBlack' },
    { text: '商品测试', initialStyle: 'smallBlack' },
    { text: '图片测试', initialStyle: 'smallBlack' },
    { text: '秒杀测试', initialStyle: 'smallBlack' },
  ];

  const handlePress = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      {texts.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(index)}>
          <Text
            style={
              activeIndex === index ? styles.largeRed : styles[item.initialStyle]
            }
          >
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  smallBlack: {
    fontSize: 14,
    color: 'black',
  },
  largeRed: {
    fontSize: 16,
    color: 'red',
  },
});

export default App;
