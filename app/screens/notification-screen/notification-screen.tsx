import React from "react"
import { ScrollView, View, ViewStyle, } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import LinearGradient from "react-native-linear-gradient"
import CardNotif from "./card-notif"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  height: 120,
  width: '100%',
  flexDirection: 'row',
  padding: 16,
}

export const NotificationScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")

  return (
    <View style={FULL}>
      <ScrollView>
        <LinearGradient colors={['#13C4B4', '#228294']} style={CONTAINER}>
        </LinearGradient>
        <CardNotif></CardNotif>
        <CardNotif></CardNotif>
        <CardNotif></CardNotif>
      </ScrollView>
    </View>
  )
})
