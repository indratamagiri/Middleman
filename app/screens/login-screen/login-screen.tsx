import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { Image, ImageStyle, ViewStyle, Dimensions, View, TextStyle, ScrollView, TouchableOpacity } from "react-native"
import { Button, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { UserModelStore } from "../../models"
import { color } from "../../theme"
import LinearGradient from "react-native-linear-gradient"
import Spinner from 'react-native-loading-spinner-overlay';

const windowWidth = Dimensions.get('window').width
const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}
const CONTAINER: ViewStyle = {
  height: 400,
  width: '100%',
  padding: 16
}
const IMG: ImageStyle = {
  width: 150,
  height: 100,
  borderRadius: 4,
  alignSelf: 'center',
  marginTop: 40
}
const LOGINCARD: ViewStyle = {
  borderColor: color.line,
  borderRadius: 4,
  borderWidth: 1.5,
  width: windowWidth - 40,
  backgroundColor: color.palette.white,
  alignSelf: 'center',
  bottom: 40
}
const LOGIN_TEXT: TextStyle = {
  textAlign: 'center',
  marginTop: 12,
  fontSize: 20,
}
const STYLEINPUT: ViewStyle = {
  marginTop: 40,
  marginHorizontal: 16
}
const STYLEPASS: ViewStyle = {
  marginHorizontal: 16,
  marginBottom: 60
}
const BUTTONCONTAINER: ViewStyle = {
  backgroundColor: '#13C4B4',
  width: 250,
  borderRadius: 50
}
const BUTTONTEXT: TextStyle = {
  color: color.palette.white,
  fontWeight: 'bold',
  fontSize: 20
}

export const LoginScreen = observer(function LoginScreen() {
  const { Login, fetchingLogin } = UserModelStore
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Pull in navigation via hook
  const navigation = useNavigation()
  const OnPressLogin = async () => {
    Login({ email: email, password: password }).then((payload) => {
      if (payload.kind === 'ok') {
        navigation.navigate('bottomStack')
      }
    })
  }

  return (
    <ScrollView style={ROOT}>
      <Spinner
        visible={fetchingLogin === "pending"}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
      />
      <LinearGradient colors={['#13C4B4', '#228294']} style={CONTAINER}>
        <Image style={IMG} source={require('../../../assets/image/MiddleMan.png')} ></Image>
      </LinearGradient>
      <View style={LOGINCARD}>
        <Text style={LOGIN_TEXT}>Login</Text>
        <TextField
          label={'Email'}
          keyboardType={'email-address'}
          style={STYLEINPUT}
          value={email}
          onChangeText={(x) => setEmail(x)}></TextField>
        <TextField
          secureTextEntry={true}
          label={'Password'}
          style={STYLEPASS}
          value={password}
          password={true}
          onChangeText={(x) => setPassword(x)}></TextField>
      </View>
      <View style={{ alignItems: 'center', bottom: 65, }}>
        <Button onPress={OnPressLogin} style={BUTTONCONTAINER}>
          <Text style={BUTTONTEXT}>LOGIN</Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={{ color: '#13C4B4', marginTop: 30 }}>Dont have an account?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
})
