import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import MyPage from './MyPage';
import SecondPage1 from './SecondPage1';
import SecondPage2 from './SecondPage2';
import SecondPage3 from './SecondPage3';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="首页" component={HomePage} />
      <Stack.Screen name="SecondPage1" component={SecondPage1} />
      <Stack.Screen name="SecondPage2" component={SecondPage2} />
      <Stack.Screen name="SecondPage3" component={SecondPage3} />
    </Stack.Navigator>
  );
};

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="首页" component={HomeStack} />
          <Tab.Screen name="我的" component={MyPage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
