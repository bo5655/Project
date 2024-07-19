import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated,
  Easing
} from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0)); // 初始化动画值

  const startAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000, // 动画持续时间，单位为毫秒
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  };

  const closeAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // 动画持续时间，单位为毫秒
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none" // 禁用默认动画
        transparent={true}
        visible={modalVisible}
        onShow={startAnimation}
        onRequestClose={() => {
          closeAnimation();
          Alert.alert("Modal has been closed.");
        }}
      >
        <Animated.View style={[styles.modalView, { opacity: fadeAnim }]}>
          <Text style={styles.modalText}>Hello World!</Text>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => {
              closeAnimation();
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
        </Animated.View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
