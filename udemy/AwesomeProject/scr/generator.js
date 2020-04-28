import React from 'react';
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback } from 'react-native';

// const generate = () => {
//     return (
//         <Button
//         title="add one"
//         onPress={() => alert('trigger')}
//         />
//     )
// }

const generate = () => {
   return (
       <TouchableWithoutFeedback
           //onPress={() => alert('trigger')}
           //onLongPress={() => alert('trigger')}
           //onPressIn={() => alert('trigger')}
           onPressOut={() => alert('trigger')}
           >
       <View style={styles.generate}>
           <Text style={{color:'#fff'}}>Add Number</Text>
       </View>
       </TouchableWithoutFeedback>
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