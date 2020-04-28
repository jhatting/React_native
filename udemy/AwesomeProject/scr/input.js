import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

class Input extends Component{

    state = {
        myTextInput:''
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput:event
        })
    }

    render(){
        return(
            <View style={styles.inputWrapper}>
        <TextInput 
            value={this.state.myTextInput}
            style={styles.input}
            onChangeText={this.onChangeInput}
            multiline={true}
            maxLength={5}
            editable={true}
            autoCapitalize={'words'}
            />
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    inputWrapper:{
        width:'100%'
    },
input:{
    width:'100%',
    backgroundColor:'#f2f2f2',
    marginTop:20,
    fontSize:20,
    padding:10
}
})

export default Input;
