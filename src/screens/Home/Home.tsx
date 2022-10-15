import { signOut } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import Button from '../../components/button/Button'
import style from './styles'

import auth from '../../config/firebaseAuthConfig'
import db from '../../config/firebaseDbConfig'
import { getDocs, collection, doc } from 'firebase/firestore'
import theme from '../../global/globalStyles'

export default function Home({ navigation }: any){
    const [tarefas, setTarefas] = useState<any[]>([])

    useEffect(() => {
        const getDatabase = async () => {
            const data = await getDocs(collection(db, "Tarefas"))
            data.docs.forEach((doc: any) => {
                setTarefas((tarefas) => [...tarefas, doc.data()])
            })
        }
        getDatabase()
    }, [])

    console.log(tarefas)

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
            <Text style={style.text}>Suas tarefas</Text>
            <View style={style.flatlist}>
                <FlatList
                nestedScrollEnabled
                    data={tarefas}
                    renderItem={({item}: any) => {
                        return (
                            <View style={style.task}>
                                <Text style={{
                                    fontFamily: theme.fonts.Medium
                                }}>{item.Description}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}