import * as React from "react"
import { GestureResponderEvent, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { typography } from "../../theme"
import { Text } from "../"

const CONTAINER: ViewStyle = {
  flexDirection: "row"
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  marginLeft: 5
}

export interface RadioButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  active: boolean,
  style?: ViewStyle,
  onPress: (event: GestureResponderEvent) => void
}

/**
 * Describe your component here
 */
export function RadioButton(props: RadioButtonProps) {
  const { style, onPress, active } = props

  return (
    <TouchableOpacity onPress={onPress} style={[CONTAINER, style]}>
      <Ionicons name={active ? 'radio-button-on' : 'radio-button-off'} size={20} />
      <Text style={TEXT}>Hello</Text>
    </TouchableOpacity>
  )
}
