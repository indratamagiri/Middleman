import React from "react"
import { SafeAreaView, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import Entypo from 'react-native-vector-icons/Entypo'
import { CardHeadHome } from "./card-head-home"
import { color, spacing } from "../../theme"
import { CardItem, Screen } from "../../components"
import { CardName } from "../../components/card-name/card-name"
import { ScrollView } from "react-native-gesture-handler"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.background,
}

export const HomeScreen = observer(() => {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")

  return (
    <SafeAreaView style={FULL}>
      <Screen style={CONTAINER} preset="scroll">
        <CardHeadHome />
        <CardName name={"Gen Pangestu"} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardItem
            title={'Supplay'}
            Icon={() => <Entypo name={'suitcase'} size={34}></Entypo>}
            TextBottom={'Our Needs'}
          />
          <CardItem
            title={'Demand'}
            Icon={() => <Entypo name={'pie-chart'} size={34}></Entypo>}
            TextBottom={'People Needs'} />
          <CardItem
            title={'My Item Supply'}
            Icon={ () => <Entypo name={'list'} size={34}></Entypo>}
            TextBottom={'Our Items'} />
        </ScrollView>
      </Screen>
    </SafeAreaView>
  )
})
