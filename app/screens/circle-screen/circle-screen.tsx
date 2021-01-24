import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { Image, ImageStyle, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import LinearGradient from 'react-native-linear-gradient'
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { AwesomeModelModel } from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "../../components"
import { CardMember } from './card-member'

const CONTAINER: ViewStyle = {
  height: 120,
  width: '100%',
  flexDirection: 'row',
  padding: 16,
}
const IMG: ImageStyle = {
  width: 180,
  height: 140,
  flex: 1
}
const INFO: ViewStyle = {
  marginTop: 60,
  flexDirection: 'row',
  margin: 16,
}
const TEXT_INFO: TextStyle = {
  fontSize: 15,
  flex: 1,
  marginLeft: 14
}
const TITLE: TextStyle = {
  fontWeight: "700",
  fontSize: 20,
  margin: 16
}
const TABLE: ViewStyle = {
  margin: 16
}

const instance = AwesomeModelModel
export const CircleScreen = observer(function CircleScreen() {
  const data = [{
    name: 'Aling',
    title: 'Leader',
    year: '2015'
  }, {
    name: 'Along',
    title: 'Co Lader',
    year: '2015'
  }, {
    name: 'Alung',
    title: 'Anbu',
    year: '2015'
  }, {
    name: 'Alop',
    title: 'Jonin',
    year: '2015'
  }, {
    name: 'Acin',
    title: 'Chunin',
    year: '2015'
  }]
  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient colors={['#13C4B4', '#228294']} style={CONTAINER}>
        </LinearGradient>
        <View style={INFO}>
          <Image style={IMG} source={require('../../../assets/image/MiddleManCircle.png')}></Image>
          <Text style={TEXT_INFO}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida nullam in adipiscing morbi magnis massa ultrices elit. Ac adipiscing cursus congue dui adipiscing. </Text>
        </View>
        <Text style={TITLE}>Member</Text>
        <View style={TABLE}>
          {data.map((item) => {
            return (
              <CardMember
                key={item.name}
                name={item.name}
                title={item.title}
                year={item.year}
              ></CardMember>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
})
