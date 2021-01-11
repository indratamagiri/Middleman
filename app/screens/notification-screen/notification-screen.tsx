import React from "react"
import { View, ViewStyle, } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Wallpaper } from "../../components"

const FULL: ViewStyle = { flex: 1 }

export const NotificationScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")

  return (
    <View style={FULL}>
      <Wallpaper />
    </View>
  )
})
