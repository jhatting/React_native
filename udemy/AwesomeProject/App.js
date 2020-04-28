import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import Nav from './scr/nav';
import Generator from './scr/generator';
import ListenItem from './scr/listitem';
import Input from './scr/input'


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
    <ScrollView style={{width:'100%'}}
    // onContentSizeChange={ (w,h)=> alert(h)}
    // onMomentumScrollBegin={()=>alert('start')}
    // onMomentumScrollEnd={()=>alert('end')}
    onScroll={()=>alert('scrolling')}
    >
<Input/>
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
  }
})


export default App;
