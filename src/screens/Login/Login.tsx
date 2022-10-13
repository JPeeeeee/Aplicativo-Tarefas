import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Button from '../../components/button/Button'
import style from './styles'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from '../../config/firebaseconfig'

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function createUser(){
        await createUserWithEmailAndPassword(auth, email, senha)
        .then(value => console.log(value.user.email))
        .catch((error) => {
            console.log(error)
            alert('Email ou senha inválidos!')
        })
    }

    async function SignIn(){
        await signInWithEmailAndPassword(auth, email, senha)
        .then(value => console.log(value.user.email))
        .catch(() => alert('Email ou senha inválidos!'))
    }

    async function SignOut(){
        await signOut(auth)
        .then(() => {
            console.log('saiu!')
        })
        .catch(error => console.log(error))
    }
    
    return (
        <View style={style.container}>
            <Text>firebase app</Text>
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
            <Button onPress={() => SignIn()} name="Entrar" color="dodgerblue" />
            <Button onPress={() => SignOut()} name="Sair" color="dodgerblue" />
            <Button onPress={() => createUser()} name="Cadastrar" 
            text={{
                color: 'dodgerblue',
                fontWeight: 'bold'
            }} 
            
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                margin: 10,
                padding: 10,        
                borderRadius: 10,
                height: 50,
                borderWidth: 2,
                borderColor: 'dodgerblue'
            }} />
        </View>
    )
}