import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import theme from '../global/globalStyles'

import Login from '../screens/Login/Login'
import Home from '../screens/Home/Home'
import Cadastro from '../screens/Cadastro/Cadastro'
import Teste from '../screens/teste/Teste'
import Teste2 from '../screens/teste2/Teste2'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function HomeTabScreen(){
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.lightBrown,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: 90,
                    paddingHorizontal: '10%',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    ...style.shadow,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ({focused}: any) => {
                        return (
                            <View style={focused ? style.view : null}>
                                <FontAwesomeIcon icon={faHome} color={focused ? theme.colors.lightBrown : theme.colors.grey} size={20} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Teste" component={Teste} 
                options={{
                    tabBarIcon: ({focused}: any) => {
                        return (
                            <View style={focused ? style.view : null}>
                                <FontAwesomeIcon icon={faUser} color={focused ? theme.colors.lightBrown : theme.colors.grey} size={20} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Teste2" component={Teste2} 
                options={{
                    tabBarIcon: ({focused}: any) => {
                        return (
                            <View style={focused ? style.view : null}>
                                <FontAwesomeIcon icon={faCog} color={focused ? theme.colors.lightBrown : theme.colors.grey} size={20} />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routes(){
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomeTabScreen} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },

    view: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 100,
    }
})