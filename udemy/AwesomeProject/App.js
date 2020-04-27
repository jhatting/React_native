import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

class App extends Component{
render() {
  return (
    <View style={style.mainView}>
      <View>
      <Text>Hello Gill</Text>
      </View>
      <View>
      <Text>Hello Guy</Text>
      </View>
      <View>
      <Text>Hello Gay</Text>
      </View>
    </View>
    );
  }
}

const style = StyleSheet.create({
  mainView:{
    paddingTop:50, backgroundColor:'blue', width:'100%'
  }
})


export default App;
