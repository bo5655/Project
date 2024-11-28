import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import MyPage from './MyPage';

const Tab = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="首页" component={HomePage} />
          <Tab.Screen name="我的" component={MyPage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
