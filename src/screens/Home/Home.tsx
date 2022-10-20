import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity, 
    Modal, 
    TextInput,
} from 'react-native'
import Button from '../../components/button/Button'
import style from './styles'

import { signOut } from '@firebase/auth'
import auth from '../../config/firebaseAuthConfig'
import db from '../../config/firebaseDbConfig'
import { getDocs, collection, doc, updateDoc, addDoc } from 'firebase/firestore'
import theme from '../../global/globalStyles'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons/faFlag'
import { faSignOut } from '@fortawesome/free-solid-svg-icons/faSignOut'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil'

export default function Home({ navigation }: any){
    const [tarefas, setTarefas] = useState<any[]>([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [modalEditVisible, setModalEditVisible] = useState(false)
    const [modalCreateVisible, setModalCreateVisible] = useState(false)
    const [modalData, setModalData] = useState({
        Description: '',
        id: '',
        Done: false,
    })
    const [modalDescription, setModalDescription] = useState('')

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

    const SignOut = async () => {
        await signOut(auth)
        .then(() => {
            navigation.navigate("Login")
        })
        .catch(error => console.log(error))
    }

    const newDoneMarker = async (item: any) => {
        if (item.Done === true){
            await updateDoc(doc(db, "Tarefas", `${item.id}`), {
                Done: false
            })
        } else{
            await updateDoc(doc(db, "Tarefas", `${item.id}`), {
                Done: true
            })
        }
        onRefresh()
    }

    const newDescription = async (item: any) => {
        await updateDoc(doc(db, "Tarefas", `${item.id}`), {
            Description: modalDescription
        })
        onRefresh()
    }

    const newTask = async () => {
        let data = {
            Description: modalDescription,
            Done: false,
            id: ''
        }
        await addDoc(collection(db, "Tarefas"), data)
        .then(async (docRef) => {
            await updateDoc(doc(db, "Tarefas", docRef.id), {
                id: docRef.id
            })
        })
        onRefresh()
    }

    const editarTarefa = (item: any) => {
        setModalEditVisible(true)
        setModalData(item)
    }

    const renderItem = ({item}: any) => {
        return (
            <View style={style.task}>
                <TouchableOpacity onPress={() => { 
                    newDoneMarker(item)
                }}>
                    <View style={style.checkMarker}>
                        <FontAwesomeIcon icon={faFlag} color={item.Done ? 'green': ''} />
                    </View>
                </TouchableOpacity>
                <Text style={{
                    fontFamily: theme.fonts.Medium,
                    textAlign: 'center',
                    maxWidth: '70%'
                }}>{item.Description}</Text>
                <TouchableOpacity onPress={() => {
                    editarTarefa(item)
                }}>
                    <View style={style.editMarker}>
                        <FontAwesomeIcon icon={faPencil} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEditVisible}
                onRequestClose={() => {
                    setModalEditVisible(!modalEditVisible);
                }}
            >
                <View style={style.containerModal}>
                    <View style={style.modal}>
                        <Text style={{
                            fontSize: 30,
                            fontFamily: theme.fonts.Bold,
                            marginTop: '10%', 
                        }}>
                            Editar tarefa
                        </Text>
                        <TextInput
                            onChangeText={(text) => setModalDescription(text)}
                            style={style.input}
                        >
                            {modalData.Description}
                        </TextInput>
                        <View style={{
                            width: '60%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <Button name="Cancelar" onPress={() => setModalEditVisible(!modalEditVisible)} mode="light" />
                            <Button name="Salvar" mode="dark" onPress={() => { 
                                setModalEditVisible(!modalEditVisible)
                                newDescription(modalData)
                            }} />
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalCreateVisible}
                onRequestClose={() => {
                    setModalCreateVisible(!modalCreateVisible);
                }}
            >
                <View style={style.containerModal}>
                    <View style={style.modal}>
                        <Text style={{
                            fontSize: 30,
                            fontFamily: theme.fonts.Bold,
                            marginTop: '10%', 
                        }}>
                            Criar tarefa
                        </Text>
                        <TextInput
                            onChangeText={(text) => setModalDescription(text)}
                            style={style.input}
                            placeholder="Nova descrição"
                        />
                        <View style={{
                            width: '60%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <Button name="Cancelar" onPress={() => setModalCreateVisible(!modalCreateVisible)} mode="light" />
                            <Button name="Criar" mode="dark" onPress={() => { 
                                setModalCreateVisible(!modalCreateVisible)
                                newTask()
                            }} />
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={style.newTask} onPress={() => setModalCreateVisible(true)}>
                <FontAwesomeIcon icon={faPlus} color={'white'} size={20} />
            </TouchableOpacity>
            <View style={style.nav}>
                <Text style={style.text}>Suas tarefas</Text>
                <TouchableOpacity onPress={() => SignOut()}>
                    <View style={style.exit}>
                        <FontAwesomeIcon icon={faSignOut} color={theme.colors.lightBrown} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={style.flatlist}>
                <FlatList
                    nestedScrollEnabled
                    data={tarefas}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}