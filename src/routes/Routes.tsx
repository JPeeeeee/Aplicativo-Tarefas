import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login/Login'
import Home from '../screens/Home/Home'
import Cadastro from '../screens/Cadastro/Cadastro'

const Stack = createStackNavigator()

export default function Routes(){
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}