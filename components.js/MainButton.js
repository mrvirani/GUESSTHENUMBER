import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const MainButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} >

            <View style={style.Button}>
                <Text style={style.ButtonText}>{props.children}
                </Text>
            </View>

        </TouchableOpacity>
    )
}


const style = StyleSheet.create({

    Button: {
        width:100,
        height:50,
        justifyContent:'center',
        backgroundColor:'#FEDBD0',
        

        

    },

    ButtonText: {
        color:'black',
        textAlign:'center'
    }

})

export default MainButton