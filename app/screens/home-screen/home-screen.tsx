import React from "react"
import { SafeAreaView, ViewStyle, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { CardHeadHome } from "./card-head-home"
import { UserModelStore } from "../../models"
import { color } from "../../theme"
import { CardItem } from "../../components"
import { CardName } from "../../components/card-name/card-name"
import { useStores } from "../../models"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.background,
}

export const HomeScreen = observer(() => {
  const { profile } = useStores()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={FULL}>
      <ScrollView style={CONTAINER}>
        <CardHeadHome name={profile?.username ? profile?.username : profile?.email} />
        <CardName name={profile?.username ? profile?.username : profile?.email} />
        <CardItem
          title={'Supplay'}
          imageSource={require('../../../assets/image/Supplay.png')}
          TextBottom={'Our Needs'}
        />
        <CardItem
          title={'My Item Supply'}
          imageSource={require('../../../assets/image/MyItems.png')}
          TextBottom={'Our Items'} />
      </ScrollView>
    </SafeAreaView>
  )
})
