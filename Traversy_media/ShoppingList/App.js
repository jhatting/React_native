import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    

  ]);

  return (
    <View style={styles.container}>
    <Header  />
    <FlatList 
      data={items}
      renderItem={({item}) => <ListItem/>} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 60,
  },
});

export default App;