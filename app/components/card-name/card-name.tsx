import React from 'react'
import { View, ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Text } from '../text/text'
import { CardNameProps } from './card-name.props'
// const bowserLogo = require("../../screens/welcome-screen/bowser.png")

const BASE_VIEW: ViewStyle = {
  borderColor: color.line,
  borderRadius: 8,
  borderWidth: 1.5,
  margin: spacing[4],
  backgroundColor: color.palette.white
}

const HEADER_NAME: ViewStyle = {
  marginHorizontal: spacing[3],
  marginVertical: spacing[3],
  flexDirection: 'row'
}

const LINE: ViewStyle = {
  borderBottomWidth: 1,
  borderColor: color.line
}
const COLUMN: ViewStyle = { flex: 1 }

export const CardName = (props: CardNameProps) => {
  const { name, style: styleOverride } = props
  return (
    <View style={[BASE_VIEW, styleOverride]}>
      <View style={HEADER_NAME}>
        <EvilIcons
          size={65}
          name={'user'}
        />
        <View style={COLUMN}>
          <Text>{name}</Text>
          <View style={LINE}/>
          <Text >Circle Name</Text>
        </View>
      </View>
    </View>
  )
}
