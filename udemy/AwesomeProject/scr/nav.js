import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Nav = () => (
    <View style={style.nav}>
        <Text>My App</Text>
    </View>
)

const style = StyleSheet.create({
    nav:{
        backgroundColor:'red',
        alignItems:'center',
        padding:10,
        width:'100%'
    }
})

export default Nav;