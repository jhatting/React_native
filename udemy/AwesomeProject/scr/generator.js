import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const generate = () => {
    return (
        <View style={styles.generate}>
            <Text style={{color:'#fff'}}>Add Number</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    generate:{
        backgroundColor:'#00bcd4',
        padding:10,
        width:'100%',
        alignItems:'center',
    }
})

export default generate;