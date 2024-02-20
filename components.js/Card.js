

import React from 'react';

import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';


const Card= props => {
  

    return (
      <View style={{...styles.card,...props.style}}>
      
      {props.children}
  
      </View>
  
    );
  }

  const styles = StyleSheet.create({

    card:{
        backgroundColor: '#ffbb39',
        padding: 30,
        elevation:10,
        borderRadius:15
    }

  })


export default Card;