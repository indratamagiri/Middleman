import React, { useState } from "react"
import { View, TextInput, TextStyle, ViewStyle, TouchableOpacity } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import { color, spacing, typography } from "../../theme"
import { translate } from "../../i18n"
import { Text } from "../text/text"
import { TextFieldProps } from "./text-field.props"
import { mergeAll, flatten } from "ramda"

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[3],
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.palette.black,
  minHeight: 44,
  fontSize: 18,
  backgroundColor: color.palette.white,
  flex: 1
}

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

const TEXTHEADE: TextStyle = {
  color: '#228294'
}

const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]))
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    password,
    ...rest
  } = props
  let containerStyle: ViewStyle = { ...CONTAINER, ...PRESETS[preset] }
  containerStyle = enhance(containerStyle, styleOverride)

  let inputStyle: TextStyle = INPUT
  inputStyle = enhance(inputStyle, inputStyleOverride)
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  const [secureText, setSecureText] = useState(password)
  return (
    <View style={containerStyle}>
      <Text style={TEXTHEADE} preset="fieldLabel" tx={labelTx} text={label} />
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5 }}>
        <TextInput
          placeholder={actualPlaceholder}
          {...rest}
          style={inputStyle}
          ref={forwardedRef}
          secureTextEntry={secureText}
        />

        {password ? (
          <TouchableOpacity onPress={() => {
            setSecureText(!secureText)
          }}>
            <Feather name={secureText ? 'eye-off' : 'eye'} size={20}></Feather>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}
