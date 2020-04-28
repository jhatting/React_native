import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItem = (props) => {
    return (
        props.items.map((item,id)=>(
        <View style={styles.ListItem} key={id}>
            <Text>{item}</Text>
        </View>
        ))
    )
}

const styles = StyleSheet.create({
    ListItem:{
        backgroundColor:'#cecece',
        alignItems:'center',
        padding:10,
        width:'100%',
        marginTop:5
    }
})

export default ListItem;