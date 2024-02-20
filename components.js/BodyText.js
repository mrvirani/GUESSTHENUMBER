
import React from 'react';

import {StyleSheet, Text,  View,} from 'react-native';




const BodyText = props => {
  

    return (
      <Text style={{...styles.body,...props.style}}>{props.children}</Text>
    );
  }
  
  
  const styles = StyleSheet.create({

    body:{
        fontFamily:'OpenSans-Bold',
        margin:10,
        fontSize:16
    },

   
  
  })
  
  
  export default BodyText;