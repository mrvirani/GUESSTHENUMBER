

import React, { useEffect, useState } from 'react';

import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import Card from '../components.js/Card';

import BodyText from '../components.js/BodyText'
import TitleText from '../components.js/TitleText';
import MainButton from '../components.js/MainButton';

import Icons from 'react-native-vector-icons/MaterialIcons'





const StartGameScreen = props => {

    const [enterInputValue, setEnterInputValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4)



    const updateLayout = () => {
        setButtonWidth(Dimensions.get('window').width / 4)
    }

    useEffect(() => {

        Dimensions.addEventListener('change', updateLayout)   //orientation change thai tyare

        return () => {
            // Create a reference to the same function for removal
            const removeEventListener = () => {
                Dimensions.removeEventListener('change', updateLayout);
            };

            // Cleanup function
            return removeEventListener;

        };

    }, [updateLayout])


    const numberInputHandler = inputText => {

        setEnterInputValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnterInputValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enterInputValue)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
            Alert.alert('Invalid Number!', 'Please add number between 1 to 99', [{ text: 'Okay', style: 'destructive', onPress: { resetInputHandler } }])
        }
        setConfirmed(true)
        setSelectedNumber(parseInt(enterInputValue))

    }

    let ConfirmedNumber

    if (confirmed) {
        ConfirmedNumber = <View><View style={{ marginTop: 20, backgroundColor: '#eeeeee', padding: 10, borderRadius: 20 }}>
            <Text style={{ fontFamily: 'sans-serif', }}>You selected Number is: {selectedNumber}</Text>

        </View>



            <Card style={{ marginTop: 50 }}>
                <TouchableOpacity onPress={() => props.onStartGame(selectedNumber)} style={{ alignItems: 'center' }} >
                    <Text>Start Game</Text>
                </TouchableOpacity>

            </Card>



        </View>
    }


    return (

        <ScrollView>

            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>

                <TouchableWithoutFeedback onPress={() =>
                    Keyboard.dismiss()

                }>
                    <View style={styles.Screen}>
                        <Card style={{ padding: 2 }}><TitleText >Start A New Game</TitleText></Card>

                        {/* <Text style={{ fontFamily:'Lato-Bold',fontSize:20}}>one </Text> 
               <Text style={{fontFamily:'RobotoSlab-VariableFont_wght',fontSize:20}}>two </Text> 
               <Text style={{fontFamily:'BreeSerif-Regulart',fontSize:20}}>three </Text> 
               <Text style={{fontFamily:'NotoSerif-VariableFont_wdth,wght',fontSize:20}}>four </Text> 
               <Text style={{fontFamily:'Oswald-VariableFont_wght',fontSize:20}}>five </Text> 
               <Text style={{fontFamily:'Shrikhand-Regular',fontSize:20}}>five </Text>  */}

                        <BodyText style={styles.title}>1stScrren</BodyText>
                        <Card style={styles.InputContainer}>
                            <TextInput blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={2} onChangeText={numberInputHandler} value={enterInputValue} style={{ borderColor: '#979797', borderWidth: 1, marginBottom: 20 }} placeholder='Enter Any Number' />
                            <View style={styles.ButtonContainer}>
                                <View style={{ width: buttonWidth }}>
                                    <Button title='Reset' color={'#575757'} onPress={resetInputHandler}
                                    />
                                </View>
                                <View style={{ width: buttonWidth }}>
                                    <Button title='Confirm' color={'#575757'} onPress={confirmInputHandler} />
                                </View>

                            </View>
                        </Card>
                        {ConfirmedNumber}
                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>


        </ScrollView>
    );
}

const styles = StyleSheet.create({

    Screen: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
    },

    title: {
        fontSize: 20,
        color: 'black',
        marginTop: 30
    },

    // button: {                // changes kariya
    //     width: Dimensions.get('window').width / 4,
    // },

    InputContainer: {
        width: '100%',
        // backgroundColor: '#ffbb39',
        padding: 30,
        elevation: 10,
        borderRadius: 15,
        marginTop: Dimensions.get('window').height > 600 ? 10 : 5
    },

    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }


})


export default StartGameScreen;








