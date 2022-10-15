import { signOut } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Button from '../../components/button/Button'
import style from './styles'

import auth from '../../config/firebaseAuthConfig'
import db from '../../config/firebaseDbConfig'
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore'
import theme from '../../global/globalStyles'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons/faFlag'
import { faSignOut } from '@fortawesome/free-solid-svg-icons/faSignOut'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil'

export default function Home({ navigation }: any){
    const [tarefas, setTarefas] = useState<any[]>([])
    const [isRefreshing, setIsRefreshing] = useState(false)

    const getDatabase = async () => {
        setTarefas([])
        const data = await getDocs(collection(db, "Tarefas"))
        data.docs.forEach((doc: any) => {
            setTarefas((tarefas) => [...tarefas, doc.data()])
        })
        setIsRefreshing(false)
    }

    useEffect(() => {
        getDatabase()
    }, [])

    const onRefresh = () => {
        setIsRefreshing(true)
        getDatabase()
    }

    async function SignOut(){
        await signOut(auth)
        .then(() => {
            console.log('saiu!')
            navigation.navigate("Login")
        })
        .catch(error => console.log(error))
    }

    const newDoneMarker = (item: any) => {
        if (item.Done === true){
            updateDoc(doc(db, "Tarefas", `${item.id}`), {
                Done: false
            })
        } else{
            updateDoc(doc(db, "Tarefas", `${item.id}`), {
                Done: true
            })
        }
        onRefresh()
    }

    const renderItem = ({item}: any) => {
        return (
            <View style={style.task}>
                <TouchableOpacity onPress={() => { 
                    console.log("pressed")
                    newDoneMarker(item)
                }}>
                    <View style={style.checkMarker}>
                        <FontAwesomeIcon icon={faFlag} color={item.Done ? 'green': ''} />
                    </View>
                </TouchableOpacity>
                <Text style={{
                    fontFamily: theme.fonts.Medium
                }}>{item.Description}</Text>
                <TouchableOpacity>
                    <View style={style.editMarker}>
                        <FontAwesomeIcon icon={faPencil} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    console.log(tarefas)

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.newTask}>
                <FontAwesomeIcon icon={faPlus} color={'white'} size={20} />
            </TouchableOpacity>
            <View style={style.nav}>
                <Text style={style.text}>Suas tarefas</Text>
                <TouchableOpacity onPress={() => SignOut()}>
                    <View style={style.exit}>
                        <FontAwesomeIcon icon={faSignOut} color={'white'} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={style.flatlist}>
                <FlatList
                    nestedScrollEnabled
                    data={tarefas}
                    renderItem={renderItem}
                    onRefresh={() => setTimeout(() => {onRefresh}, 200)}
                    refreshing={isRefreshing}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}