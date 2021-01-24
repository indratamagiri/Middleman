import React from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import LinearGradient from "react-native-linear-gradient"
import { Text } from "../../components"
import { color } from "../../theme"
import { useStores } from "../../models"
import { observer } from "mobx-react-lite"
import resetNavigation from "../../utils/validate"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  height: 120,
  width: '100%',
  flexDirection: 'row',
  padding: 16,
}
const TEXT_PROFILE: TextStyle = {
  fontWeight: '700',
  fontSize: 18,
  textAlign: 'center',
  marginTop: 12
}
const PROFILE: ViewStyle = {
  alignItems: 'center'
}
const IMG: ImageStyle = {
  marginTop: 30,
  width: 75,
  height: 75,
  borderRadius: 50,
}
const TEXT_NAME: TextStyle = {
  fontWeight: '400',
  fontSize: 22,
  textAlign: 'center',
  marginTop: 4
}
const TEXT_TAG: TextStyle = {
  fontWeight: '400',
  fontSize: 14,
  textAlign: 'center',
  marginTop: 4
}
const TEXT_TITLE: TextStyle = {
  fontFamily: 'Roboto-Light',
  fontSize: 22,
  textAlign: 'center',
  marginTop: 4
}
const LINE: ViewStyle = {
  borderBottomWidth: 1,
  borderColor: color.palette.lighterGrey,
  width: '70%',
  marginTop: 16
}
const BIO: ViewStyle = {
  borderWidth: 1,
  borderColor: color.palette.lighterGrey,
  flex: 1,
  marginTop: 70,
  margin: 16,
  backgroundColor: color.palette.white
}
const TOP_BIO: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
  marginHorizontal: 4
}
const CONTAINER_CARD: ViewStyle = {
  backgroundColor: '#1E959E',
  borderRadius: 20,
  width: 120
}
const TEXT_CARD: TextStyle = {
  marginVertical: 6,
  textAlign: 'center',
  color: color.palette.white,
  fontWeight: '700'
}
const TEXT_INFO: TextStyle = {
  fontSize: 16,
  marginTop: 12,
  paddingBottom: 8,
  borderBottomColor: '#19ACA9',
  borderBottomWidth: 1,
}
const LOGOUT: ViewStyle = {
  backgroundColor: '#1E959E',
  borderRadius: 20,
  width: 120,
  alignSelf: 'center',
  marginTop: 60,
  marginBottom: 30
}

export const ProfileScreen = observer(() => {
  const navigation = useNavigation()
  const { logout } = useStores()

  return (
    <View style={FULL}>
      <ScrollView>
        <LinearGradient colors={['#13C4B4', '#228294']} style={CONTAINER}>
        </LinearGradient>

        <View style={PROFILE}>
          <Text style={TEXT_PROFILE}>My Profile</Text>
          <Image style={IMG} source={require('../../../assets/image/profile.png')}></Image>
          <Text style={TEXT_NAME}>Joey Leong</Text>
          <Text style={TEXT_TAG}>@jleong</Text>
          <Text style={TEXT_TITLE}>Serdadu Circle</Text>
          <View style={LINE}></View>
        </View>

        <View style={BIO}>
          <View style={TOP_BIO}>
            <View>
              <View style={CONTAINER_CARD}>
                <Text style={TEXT_CARD}>Bio</Text>
              </View>
              <Text style={TEXT_INFO}>Jl KH Syahdan</Text>
              <Text style={TEXT_INFO}>081122334455</Text>
              <Text style={TEXT_INFO}>JordanS@wBnius.ediu</Text>
            </View>
            <View>
              <View style={CONTAINER_CARD}>
                <Text style={TEXT_CARD}>History</Text>
              </View>
              <Text style={TEXT_INFO}>Purchase List</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => {
            resetNavigation(navigation, 'login')
            logout()
          }} style={LOGOUT}>
            <Text style={TEXT_CARD}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
})
