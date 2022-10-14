import { signOut } from '@firebase/auth'
import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/button/Button'
import style from './styles'

import auth from '../../config/firebaseconfig'

export default function Home({ navigation }: any){
    async function SignOut(){
        await signOut(auth)
        .then(() => {
            console.log('saiu!')
            navigation.navigate("Login")
        })
        .catch(error => console.log(error))
    }

    return (
        <View style={style.container}>
            <Button name="Sair" color="crimson" onPress={() => SignOut()} />
        </View>
    )
}