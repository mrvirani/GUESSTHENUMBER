

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialIcons'




import Header from './components.js/Header';
import StartGameScreen from './Screens/StartGameScreen';
import RunningGameScreen from './Screens/RunningGameScreen';
import ResultGameScreen from './Screens/ResultGameScreen';

const App = () => {

  //Hooks
  const [userNumber, setUserNumber] = useState()
  const [guessRound, setGuessRounds] = useState(0)


  //functions
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandaler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0)      //round 0 , so it will leave 3rd scrren 
    setUserNumber(null)   //1st scrren pasi show thase
  }

  //1st scrren 
  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRound <= 0) {   //if username is available then 2nd screen show
    content = <RunningGameScreen userChoice={userNumber} onGameOver={gameOverHandaler} />
  } else if (guessRound > 0) {
    content = <ResultGameScreen roundNumber={guessRound} userNumber={userNumber} onRestartGame={configureNewGameHandler} />
  }


  return (
    <View style={styles.screen}>
      <Header title={'Guess The Number'} />

      {/* <StartGameScreen /> */}
      {/* <RunningGameScreen/> */}
      {/* <ResultGameScreen /> */}

      {content}

    </View>

  );
}


const styles = StyleSheet.create({

  screen: {
    flex: 1
  }

})


export default App;
