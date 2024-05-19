import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

export default function Header({ items }) {

    const navigation = useNavigation();
     const handleProfile = () => {
        navigation.navigate('Profile')
     }
     
  return (
    <View style={styles.header}>
     {items &&
       <View style={styles.cardHeader}>
       <Text style={styles.text}>Gym Fitness</Text>
  
        <TouchableOpacity onPress={handleProfile}>
        <View style={{width: 40, height: 40, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
          <Text>AS</Text>
          </View>
        </TouchableOpacity>
       </View>

     }
    </View>
  )
}