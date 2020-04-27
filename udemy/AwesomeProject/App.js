import React, { Component } from 'react';
import { Text, View} from 'react-native';

class App extends Component{
render() {
  return (
    <View style={{
      backgroundColor:'red',
      width:'100%',
      marginTop:10,
    }}>
      <view>
        <text>Hello Guy</text>
      </view>
      <view>
        <text>Hello Guy</text>
      </view>
      <view>
        <text>Hello Guy</text>
      </view>
    </View>
  );
}
}
export default App;
