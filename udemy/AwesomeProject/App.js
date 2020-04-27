import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Nav from './scr/nav';

class App extends Component{
render() {
  return (
    <View style={style.mainView}>

      <Nav/>

      <View style={style.basicView}>
      <Text style={style.basicText}>Hello Gill</Text>
      </View>
      <View style={style.basicView}>
      <Text style={style.basicText}>Hello Guy</Text>
      </View>
      <View style={style.basicView}>
      <Text style={style.basicText}>Hello Gay</Text>
      </View>
    </View>
    );
  }
}

const style = StyleSheet.create({
  mainView:{
    flex:1,
    paddingTop:50, backgroundColor:'white', alignItems: 'flex-start', justifyContent:'flex-start', width:'100%'
  },
  basicView:{
    backgroundColor:'green', width:'100%', marginBottom:5,
  },
  basicText:{
    fontSize:30, color:'#ffffff', textAlign:'center', padding:20
  }
})


export default App;
