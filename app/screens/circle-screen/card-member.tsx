import React from 'react'
import { TextStyle, View, ViewStyle } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Text } from '../../components'

const CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20
}
const NAME: TextStyle = {
  fontSize: 14,
  flex: 2,
  marginLeft: 8
}
const YEAR: TextStyle = {
  fontSize: 14,
  flex: 1,
  marginLeft: 8
}
const TITLE: TextStyle = {
  fontSize: 14,
  flex: 1,
  marginLeft: 8
}

type CardMamberProps = {
    name: string,
    year: string,
    title: string
}

export const CardMember = ({
  name, year, title
}: CardMamberProps) => {
  return (
    <View style={CONTAINER}>
      <EvilIcons
        size={38}
        name={'user'}
      />
      <Text style={NAME}>{name}</Text>
      <Text style={YEAR}>{year}</Text>
      <Text style={TITLE}>{title}</Text>
    </View>
  )
}
