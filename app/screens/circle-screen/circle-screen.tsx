import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { AwesomeModelModel } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}

const instance = AwesomeModelModel
export const CircleScreen = observer(function CircleScreen() {
  const { noteStore, change, getNote } = instance
  // const navigation = useNavigation()
  console.tron.log(noteStore)
  const [text, setText] = useState('')
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text={getNote().title} />
      <TextField value={text} onChangeText={(x) => setText(x)}></TextField>
      <Button onPress={() => {
        change({ title: text, toggle: true })
      }
      } text={'change'}></Button>
    </Screen>
  )
})
