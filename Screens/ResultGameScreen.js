

import React from 'react';

import { StyleSheet, Text, View, Button, Image, ScrollView, Dimensions } from 'react-native';
import TitleText from '../components.js/TitleText';
import BodyText from '../components.js/BodyText';


const ResultGameScreen = props => {


  return (
    <ScrollView>
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
          <BodyText style={styles.ResultText}> Your Phone needed <Text style={{ color: 'blue' }}> {props.roundNumber} </Text> rounds to guess the Number is <Text style={{ color: 'blue' }}>{props.userNumber}</Text></BodyText>

        </View>
        <Button title="New Game Start" onPress={props.onRestartGame} />

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({

  Screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  imgContainer: {
    width: Dimensions.get('window').width *0.7,
    height:  Dimensions.get('window').width *0.7,
    borderRadius: Dimensions.get('window').width *0.7 /2,
    borderColor: 'black',
    borderWidth: 2,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height *0.7 /60,
  },

  img: {
    width: '100%',
    height: '100%',
  },

  ResultText: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get('window').height <400 ?40:20,
    textAlign: 'center'
  }

})


export default ResultGameScreen;








