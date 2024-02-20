
import React from 'react';

import {StyleSheet, Text,  View,} from 'react-native';




const TitleText = props => {
  

    return (
      <Text style={{...styles.body,...props.style}}>{props.children}</Text>
    );
  }
  
  
  const styles = StyleSheet.create({

    body:{
        fontFamily:'OpenSans-Bold',
        color:'black',
        fontSize:25,
        margin:10
    },

  
  })
  
  
  export default TitleText;