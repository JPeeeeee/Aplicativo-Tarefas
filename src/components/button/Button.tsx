import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button(props: any){
    const style = StyleSheet.create({
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: `${props.color}`,
            margin: 10,
            padding: 10,        
            borderRadius: 10,
            height: 50,
        }
    })

    return (
        <TouchableOpacity style={{width: '50%'}} onPress={props.onPress}>
            <View style={props.style ? props.style : style.button}>
                <Text style={props.text ? props.text : {color: 'white', fontWeight: 'bold'}}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

