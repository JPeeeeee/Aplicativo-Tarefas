import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import theme from '../../global/globalStyles'

export default function Button(props: any){
    const style = StyleSheet.create({
        light: {
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: theme.colors.lightBrown,
            height: 50,
        },

        dark: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.lightBrown,
            margin: 10,
            borderRadius: 10,
            height: 50,
        },

        lightText: {
            color: theme.colors.lightBrown, 
            fontFamily: theme.fonts.SemiBold
        },

        darkText: {
            color: 'white', 
            fontFamily: theme.fonts.SemiBold
        }
    })

    return (
        <TouchableOpacity style={{width: '75%'}} onPress={props.onPress}>
            <View style={props.mode === "dark" ? style.dark : style.light}>
                <Text style={props.mode === "dark" ? style.darkText : style.lightText}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

