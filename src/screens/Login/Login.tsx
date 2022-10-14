import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Button from '../../components/button/Button'
import style from './styles'

import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../config/firebaseconfig'

export default function Login({ navigation }: any){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function SignIn(){
        await signInWithEmailAndPassword(auth, email, senha)
        .then(value => {
            console.log(value.user.email)
            navigation.navigate("Home")
        })
        .catch(() => alert('Email ou senha inválidos!'))
    }
    
    return (
        <View style={style.container}>
            <Text style={style.text}>Tasks</Text>
            <TextInput 
                placeholder='Email'
                value={email}
                onChangeText={value => setEmail(value)}
                style={style.input}
            />
            <TextInput 
                placeholder='Senha'
                value={senha}
                onChangeText={value => setSenha(value)}
                style={style.input}
            />
            <Button onPress={() => SignIn()} name="Entrar" color="dodgerblue" />
            <Button onPress={() => navigation.navigate('Cadastro')} name="Cadastrar" 
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