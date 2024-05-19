import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/header'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/Auth'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import { URL_APP } from '@env'


export default function Profile() {
 
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const { dataUser } = useContext(AuthContext)

 
   
  useEffect(() => {
    const handleMedidas = async() => {
      try {
         const response = await axios.get(`${URL_APP}/buscarmedidas/?id_user=${dataUser.data.id}`)
         setPeso(response.data['data'][0].peso)
         setAltura(response.data['data'][0].altura)
         
      } catch (error) {
        console.log(error)
      }
  }
  handleMedidas()
  }, [])
 const navigation = useNavigation()
  const handleLogoutApp = () => {
    navigation.navigate('Login')
  }



  
  return (
    <View style={{flex: 1}}>
        <Header />
      <View style={styles.cardProfile}>
       <View style={styles.perfilImgLt}>
       <Text>Profile</Text>
       </View>
      </View>

      <ScrollView style={{flexDirection: 'column', padding: 15, gap: 8, marginBottom: 4}}>
        <View style={styles.logout}>
        <Ionicons name="person" size={22}/>
          <Text>{dataUser.data.name}</Text>
        </View>
        <View style={styles.logout}>
        <Ionicons name="mail" size={22}/>
          <Text>{dataUser.data.email}</Text>
        </View>
        <View style={styles.logout}>
        <Ionicons name="calendar" size={22}/>
          <Text>19/16/1998</Text>
        </View>
        <View style={styles.logout}>
          <Text>Altura: {altura}</Text>
        </View>
        <View style={styles.logout}>
          <Text>Peso Atual: {peso}</Text>
        </View>

      <TouchableOpacity onPress={handleLogoutApp}>
      <View style={[styles.logout, styles.corLogou]}>
        <Text>Sair do app</Text>
      </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}