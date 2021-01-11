import React from 'react'
import { View, ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'
import { CircleImage } from '../circle-image/circle-image'
import { Text } from '../text/text'
import { CardNameProps } from './card-name.props'
// const bowserLogo = require("../../screens/welcome-screen/bowser.png")

const BASE_VIEW: ViewStyle = {
  borderColor: color.line,
  borderRadius: 8,
  borderWidth: 1.5,
  margin: spacing[4],
  height: 300,
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
const COLUMN: ViewStyle = { marginHorizontal: 14, flex: 1 }

export const CardName = (props: CardNameProps) => {
  const { name, style: styleOverride } = props
  return (
    <View style={[BASE_VIEW, styleOverride]}>
      <View style={HEADER_NAME}>
        <CircleImage
          size={45}
          source={'https://reactnative.dev/img/tiny_logo.png'}
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
