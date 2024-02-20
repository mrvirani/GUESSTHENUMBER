

import React from 'react';

import { StyleSheet, Text, View, Button, Image } from 'react-native';
import TitleText from '../components.js/TitleText';
import BodyText from '../components.js/BodyText';


const ResultGameScreen = props => {


  return (
    <View style={styles.Screen}>
      <TitleText>Game is over</TitleText>

      <View style={styles.imgContainer}>
        <Image fadeDuration={3000} source={require('../assets/victoryImg.jpg')} style={styles.img} />


      </View>

      {/* <Image  style={{width:'100%',height:200}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006_edit_1.jpg'}} resizeMode="cover"/>
        */}

      {/* <BodyText>Number of Rounds:  {props.roundNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText> */}

      <View >
      <BodyText style={styles.ResultText}> Your Phone needed <Text style ={{color:'blue'}}> {props.roundNumber} </Text> rounds to guess the Number is <Text style ={{color:'blue'}}>{props.userNumber}</Text></BodyText>

      </View>
      <Button title="New Game Start" onPress={props.onRestartGame} />

    </View>
  );
}

const styles = StyleSheet.create({

  Screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 2,
    overflow: 'hidden',
    marginVertical: 20
  },

  img: {
    width: '100%',
    height: '100%',
  },

  ResultText:{
    marginHorizontal:20,
    marginVertical:20,
   textAlign:'center'
  }

})


export default ResultGameScreen;








