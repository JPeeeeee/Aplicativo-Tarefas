import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from '../../components/button/Button'
import style from './styles'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../../config/firebaseconfig'

export default function Cadastro({ navigation }: any){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')

    async function createUser(){
        await createUserWithEmailAndPassword(auth, email, senha)
        .then((value) => {
            console.log(value.user.email)
            navigation.navigate("Home")
        })
        .catch((error) => {
            console.log(error)
            alert('Email ou senha inválidos!')
        })
    }

    return (
        <View style={style.container}>
            <TextInput 
                placeholder='Nome'
                value={nome}
                onChangeText={value => setNome(value)}
                style={style.input}
            />
            <TextInput 
                placeholder='Sobrenome'
                value={sobrenome}
                onChangeText={value => setSobrenome(value)}
                style={style.input}
            />
            <TextInput 
                placeholder='email'
                value={email}
                onChangeText={value => setEmail(value)}
                style={style.input}
            />
            <TextInput 
                placeholder='senha'
                value={senha}
                onChangeText={value => setSenha(value)}
                style={style.input}
            />
            <Button name="Cadastrar" color="dodgerblue" onPress={() => createUser()} />
        </View>
    )
}