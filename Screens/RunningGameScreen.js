




import React, { useState, useRef, useEffect } from 'react';

import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';
import Card from '../components.js/Card';
import MainButton from '../components.js/MainButton';
import Icons from 'react-native-vector-icons/MaterialIcons'
import BodyText from '../components.js/BodyText';


const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  let randomNumber = Math.floor((Math.random()) * (max - min)) + min

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

const renderListItem = (value,numberOfRound)=>(
  (<View key={value} style={styles.ResultListNumber}><Text>#{numberOfRound}</Text><Text>{ value}</Text></View>)
)


const RunningGameScreen = props => {

  const initialGuess = generateRandomBetween(1, 100, props.userChoice)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  const [pastGuesses, setPastGuess] = useState([initialGuess])
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  // if(currentGuess == props.userChoice){
  //   console.log("yes you are right poition")
  // }

  const { userChoice, onGameOver } = props

  useEffect(() => {    //useEffect take a function and this function by default runs after every render cycle for this componenets

    //it render after not before or simulatinousaly 

    if (currentGuess == userChoice) {         //for use effect check 20 video modual 4
      onGameOver(pastGuesses.length);                           //jya sudhi aa condition sachi nahi pade tya sudhi te re render thatu rese
    }                                           // whenever such value is changes then this efect will re run
  }, [currentGuess, userChoice, onGameOver])  //1st is function 2nd is argument you passes to useEffect is an array of dependancies of functions


  let nextGuessHandler = direction => {
    if ((direction == 'lower' && currentGuess < props.userChoice) || (direction == 'grater' && currentGuess > props.userChoice)) {

      // direction gives lower it's means userchoise number is smaller 

      Alert.alert('Don\'t lie', 'You know that this is wrong', [{ text: 'Sorry', style: 'cancel' }])

      return;
    }

    if (direction == 'lower') {
      currentHigh.current = currentGuess
    }

    if (direction == 'grater') {
      currentLow.current = currentGuess
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    // setRounds(curRounds => curRounds + 1)

    setPastGuess(curPastGuesses => [nextNumber, ...curPastGuesses])
  }

  return (
    <View style={styles.Screen}>
      <Text>2nd Screen</Text>
      <Text>Oponenet's Guess</Text>
      <BodyText> {currentGuess} </BodyText>
      <Card style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.lowerBtn}>
          <MainButton onPress={nextGuessHandler.bind(this, 'lower')} style={{ flexDirection: 'row' }}>
            {/* <Text>Lower Number</Text> */}
            <Text>
              <Icons name='remove' size={20} />
            </Text>
          </MainButton>
        </View>
        <View style={styles.GraterBtn}>
          <MainButton onPress={(nextGuessHandler.bind(this, 'grater'))} style={{ flexDirection: 'row' }}>
            {/* <Text>Grater Number</Text> */}
            <Text>
              <Icons name='add' size={20} />
            </Text>
          </MainButton>
        </View>



      </Card>

      <View style={styles.listContainer}>
        
        <ScrollView contentContainerStyle='styles.list'>
          {pastGuesses.map((guess,index) => renderListItem(guess,pastGuesses.length-index))}
        </ScrollView>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({

  Screen: {
    flex: 1,
    alignItems: 'center'
  },
  lowerBtn: {
    margin: 10,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1.5,
    overflow: 'hidden'

  },
  GraterBtn: {
    margin: 10,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1.5,
    overflow: 'hidden'
  },

  ResultListNumber: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
  },

  listContainer:{
    width:'80%',
    flex:1,
    marginTop:10
  },

  list:{
    justifyContent:'flex-end',
    flexGrow:1,
    alignItems:'center',
    color:'black'
  }

})


export default RunningGameScreen;








