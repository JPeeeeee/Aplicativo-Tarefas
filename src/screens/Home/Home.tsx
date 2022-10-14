import { signOut } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/button/Button'
import style from './styles'

import auth from '../../config/firebaseAuthConfig'
import { FlatList } from 'react-native-gesture-handler'
import database from '../../config/firebaseDbConfig'
import { doc, getDoc } from '@firebase/firestore'

export default function Home({ navigation }: any){
    const [tarefa, setTarefa] = useState([])

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
            <Text style={style.text}>Bem vindo à HomePage</Text>
            <Button name="Sair" color="crimson" onPress={() => SignOut()} />
        </View>
    )
}