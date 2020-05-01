import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createStackNavigator ,createAppContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

class HomeScreen extends Component{
  render() {
    return(
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'white'
        }}>
          <Text>Home Screen</Text>

        </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen
  }
},{
  intialRouteName: 'Home'
})

export default createAppContainer(AppNavigator);