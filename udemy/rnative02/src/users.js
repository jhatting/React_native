import React, {Component} from 'react';
import { Text, View } from 'react-native';

class UsersScreen extends Component{
  render() {
    return(
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'white'
        }}>
          <Text>I am the users screen</Text>

        </View>
    );
  }
}
)

export default UsersScreen;