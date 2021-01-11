import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { color } from "../../theme"
import { Text } from "../../components"

const CONTAINER: ViewStyle = {
  backgroundColor: color.palette.deepskyblue,
  height: 100,
  width: '100%',
}
const TEXT: TextStyle = { color: color.palette.white }

export const CardHeadHome = () => {
  return (
    <View style={CONTAINER}>
      <Text preset={'header'} style={TEXT}>Welcome Back, Jordan</Text>
    </View>
  )
}
