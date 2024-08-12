import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const App = () => {
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  const handleScrollEndDrag = (event) => {
    const { nativeEvent } = event;
    const velocityX = nativeEvent?.velocity?.x ?? 0;
    const velocityY = nativeEvent?.velocity?.y ?? 0;
    console.log('velocityX:', velocityX, 'velocityY:', velocityY);
    setVelocity({ x: velocityX, y: velocityY });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        onScrollEndDrag={handleScrollEndDrag}
        scrollEventThrottle={16}
      >
        <View style={styles.content} />
      </ScrollView>
      <Text style={styles.velocityText}>
        水平速度: {velocity.x.toFixed(2)} 像素/毫秒, 垂直速度: {velocity.y.toFixed(2)} 像素/毫秒
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  content: {
    height: 2000,
    backgroundColor: 'lightgray',
  },
  velocityText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 18,
    color: 'black',
  },
});

export default App;
