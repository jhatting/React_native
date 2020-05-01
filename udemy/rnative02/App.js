import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createStackNavigator ,createAppContainer } from '@react-navigation/native';

import HomeScreen from './src/home';
import UserScreen from './src/users';

const AppNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen
  },
  Users:{
    screen: UserScreen
  }
},{
  intialRouteName: 'Users'
})

export default createAppContainer(AppNavigator);
