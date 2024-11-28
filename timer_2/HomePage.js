import React from 'react';
import { View, Text, StyleSheet, Button, Animated, Image } from 'react-native';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      animation: new Animated.Value(0),
    };
    this.images = [
      { uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202410/displayProduct/10086707901849/800_800_a_mobileEFC513D129AD8FD5F25EDAB3E0617A25.png' },
      { uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202312/displayProduct/29010100904/group/800_800_F33BE6BFE28E9425C206451634F9E40D.jpg' },
      { uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/29010100904/group/800_800_906F8D997AEE5B1F3046A4AD2C8EC0F5.jpg' },
      { uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/29010100904/group/800_800_17B0441FCB19C9414A366AD661A72354.jpg' },
      { uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/29010100904/group/800_800_AEB41D4841675B782603DFE0AECE8408.jpg' },
      { uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/29010100904/group/800_800_5670502FEF5A1F44BAFE2C5A976B082E.jpg' },
      { uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/29010100904/group/800_800_C6D820A04B27EF911937C43207535844.jpg' },
      { uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202312/displayProduct/29010100904/group/800_800_6B8D5F86EF7732CA36996CDD0C59B407.jpg' },
      { uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202312/displayProduct/29010100904/group/800_800_81E8900C7F5DB64899B16D86F333BE54.jpg' },
      { uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202312/displayProduct/29010100904/group/800_800_D931F5225ED09A7D1709816B1FB10EFF.jpg' },
    ]; // 替换为您的图片路径
  }

  componentDidMount() {
    this.startCarousel();

    // 监听焦点事件
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.startCarousel(); // 启动定时器
    });

    this.blurListener = this.props.navigation.addListener('blur', () => {
      clearInterval(this.carouselInterval); // 停止定时器
    });
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval); // 清除定时器
    this.focusListener(); // 移除事件监听
    this.blurListener(); // 移除事件监听
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
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
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const translateY = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -50],
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.carouselContainer, { transform: [{ translateY }] }]}>
          <Image source={this.images[this.state.index]} style={styles.image} />
        </Animated.View>
        
        {/* 按钮 */}
        <View style={styles.buttonContainer}>
          <Button title="二级页面 1" onPress={() => this.props.navigation.navigate('SecondPage1')} />
          <Button title="二级页面 2" onPress={() => this.props.navigation.navigate('SecondPage2')} />
          <Button title="二级页面 3" onPress={() => this.props.navigation.navigate('SecondPage3')} />
        </View>
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
    width: '80%',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'space-between',
  },
});

export default HomePage;
