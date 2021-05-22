import React, { useEffect } from "react"
import { SafeAreaView, ViewStyle, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { CardHeadHome } from "./card-head-home"
import { color } from "../../theme"
import { CardItem } from "../../components"
import { CardName } from "../../components/card-name/card-name"
import { FloatingAction } from "react-native-floating-action";
import { ProfileModelStore } from "../../models"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.background,
}

export const HomeScreen = observer(() => {
  const navigation = useNavigation()
  const { GetDataProfile, fetchingProfile, name, email, avatar } = ProfileModelStore

  useEffect(() => {
    GetDataProfile()
  }, [])


  return (
    <SafeAreaView style={FULL}>
      <ScrollView style={CONTAINER}>
        <CardHeadHome name={name} />
        <CardName name={email} />
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
      <FloatingAction
        actions={[
          {
            text: "Tambah Item",
            icon: require("../../../assets/image/addProduct.png"),
            name: "addItem",
          },
        ]}
        onPressItem={name => {
          if (name === "addItem") {
            navigation.navigate("addItem")
          }
        }}
      />
    </SafeAreaView>
  )
})
