import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      animation: new Animated.Value(0),
    };
    this.images = ['轮播图1', '轮播图2', '轮播图3']; // 轮播图内容
  }

  componentDidMount() {
    console.log('component did mount');
    this.startCarousel();
  }

  componentWillUnmount() {
    console.log('component will unmount');
    clearInterval(this.carouselInterval); // 清除定时器
  }

  startCarousel = () => {
    console.log('start carousel');
    this.carouselInterval = setInterval(() => {
      console.log('carousel interval');
      this.setState(
        (prevState) => ({
          index: (prevState.index + 1) % this.images.length,
        }),
        () => {
          this.animate();
        }
      );
    }, 3000); // 每3秒切换一次
  };

  animate = () => {
    this.state.animation.setValue(0);
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000, // 动画持续时间
      useNativeDriver: true,
    }).start();
  };

  render() {
    const translateY = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -100], // 动画效果，您可以根据需要自定义
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.carouselContainer, { transform: [{ translateY }] }]}>
          <Text style={styles.text}>{this.images[this.state.index]}</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#e0e0e0',
    width: '80%',
  },
  text: {
    fontSize: 20,
  },
});

export default HomePage;
