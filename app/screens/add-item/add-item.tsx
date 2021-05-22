import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Header } from '../../components'
import { color } from '../../theme'

export const AddItem = () => {
  const navigation = useNavigation()
  return (
    <View style={{ backgroundColor: color.palette.white, flex: 1 }}>
      <Header navigation={navigation} title={"Tambah Item"}></Header>

      <ScrollView>

      </ScrollView>
    </View>
  )
}