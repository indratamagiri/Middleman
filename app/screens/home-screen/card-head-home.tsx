import React from "react"
import { Image, ImageStyle, TextStyle, ViewStyle } from "react-native"
import LinearGradient from 'react-native-linear-gradient'
import { color } from "../../theme"
import { Text } from "../../components"

const CONTAINER: ViewStyle = {
  minHeight: 120,
  width: '100%',
  flexDirection: 'row',
  padding: 16
}
const TEXT: TextStyle = {
  color: color.palette.white,
  marginLeft: 8,
  width: '70%'
}

const IMG: ImageStyle = {
  width: 100,
  height: 70,
  borderRadius: 12,
}

type paramType = {
  name: string
}

export const CardHeadHome = (param: paramType) => {
  const { name } = param
  return (
    <LinearGradient colors={['#13C4B4', '#228294']} style={CONTAINER}>
      <Image style={IMG} source={require('../../../assets/image/MiddleMan.png')} ></Image>
      <Text preset={'header'} style={TEXT}>{`Welcome Back, ${name}`}</Text>
    </LinearGradient>
  )
}
