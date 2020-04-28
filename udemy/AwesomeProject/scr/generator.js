import React from 'react';
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

// const generate = () => {
//     return (
//         <Button
//         title="add one"
//         onPress={() => alert('trigger')}
//         />
//     )
// }

const generate = (props) => {
   return (
       <TouchableOpacity
       style={styles.generate}
           onPress={() => props.add()}
           //onLongPress={() => alert('trigger')}
           //onPressIn={() => alert('trigger')}
           //onPressOut={() => alert('trigger')}
           >
      
           <Text style={{color:'#fff'}}>Add Number</Text>
       
       </TouchableOpacity>
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