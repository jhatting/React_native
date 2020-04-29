import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image,ImageBackground} from 'react-native';

import Nav from './scr/nav';
import Generator from './scr/generator';
import ListenItem from './scr/listitem';
import Input from './scr/input';
import Picker from './scr/picker';
import ModalComp from './scr/modals'

import RIP from './scr/assets/images/_JPG_RIP_100.jpg'

class App extends Component{

  state = {
    nameOfApp:'My First Awesome App',
    random:[20,837]
  }

  onAddRandom = () => {
    const random = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return{
    random:[...prevState.random,random]
  }
})

}

onItemDelete = (position) => {
  const newArray = this.state.random.filter((item,index)=>{
    return position != index;
  })
  this.setState({
    random:newArray
  })

}

render() {
  return (
    <View style={style.mainView}>
      <Nav name={this.state.nameOfApp}/>  

      {/* 

      <View style={style.basicView}>
      <Text style={style.basicText}>Hello Gill</Text>
      </View>
      <View style={style.basicView}>
      <Text style={style.basicText}>Hello Guy</Text>
      </View>
      <View style={style.basicView}>
      <Text style={style.basicText}>Hello Gay</Text>
      </View>

      <Generator add={this.onAddRandom}/>
      <ListenItem 
      items={this.state.random}
      delete={this.onItemDelete}
      /> */}
    <ScrollView 
      style={{width:'100%'}}
      // onContentSizeChange={ (w,h)=> alert(h)}
      // onMomentumScrollBegin={()=>alert('start')}
      // onMomentumScrollEnd={()=>alert('end')}
      //onScroll={()=>alert('scrolling')}
    >
      {/* <Input/> */}

  {/* <Picker/>
  <ActivityIndicator
    size="large"
    color="#0000ff"
    animating={true}
/> */}
{/* 
      <ImageBackground
      source={{uri:'https://picsum.photos/id/237/200/300'}}
      style={style.RIP}
       resizeMode="contain"
      // onLoad={ () => alert('IMAGE Loading ')}
      >
        <Text> Yo BITCH!!</Text>
      </ImageBackground> */}

      <ModalComp/>
      
      </ScrollView>
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
  },
  RIP:{
    width:'100%',
    height: 300,
    marginTop:20
  }
}) 

export default App;
