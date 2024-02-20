
import React from 'react';

import {StyleSheet, Text,  View,} from 'react-native';




const Header = props => {
  

    return (
      <View style={styles.header}>
        <Text style ={ styles.headerText}>{props.title}</Text>
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({

    header:{
        width:'100%',
        height:60,
        backgroundColor:'#f7287b',
        alignItems:'center',
        justifyContent:'center'
    },

    headerText:{
        color:'green',
        fontSize:15,
    }
  
  })
  
  
  export default Header;