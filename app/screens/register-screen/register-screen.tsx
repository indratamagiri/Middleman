import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import {
  Dimensions,
  ImageStyle,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
  Image,
  ToastAndroid
} from "react-native"
import { Button, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import LinearGradient from "react-native-linear-gradient"
import { UserModelStore, useStores } from "../../models"
import { color } from "../../theme"
import { validateEmail } from "../../utils/validate"

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

export const RegisterScreen = observer(function RegisterScreen() {
  const { Register } = UserModelStore
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfrim, setPasswordConfrim] = useState('')

  // Pull in navigation via hook
  const navigation = useNavigation()
  const OnPressRegister = () => {
    if (!validateEmail(email)) {
      ToastAndroid.show("Email is wrong!", ToastAndroid.SHORT)
    } else if (!password) {
      ToastAndroid.show("password is wrong!", ToastAndroid.SHORT)
    } else if (password !== passwordConfrim) {
      ToastAndroid.show("password not match!", ToastAndroid.SHORT)
    } else {
      Register({email, password, name: email})
    }
  }

  return (
    <ScrollView style={ROOT}>
      <LinearGradient colors={['#13C4B4', '#228294']} style={CONTAINER}>
        <Image style={IMG} source={require('../../../assets/image/MiddleMan.png')} ></Image>
      </LinearGradient>
      <View style={LOGINCARD}>
        <Text style={LOGIN_TEXT}>Register</Text>
        <TextField
          onChangeText={(x) => setEmail(x)}
          label={'Email'} keyboardType={'email-address'} style={STYLEINPUT}></TextField>
        <TextField
          onChangeText={(x) => setPassword(x)}
          secureTextEntry={true}
          label={'Password'}
          style={STYLEPASS}></TextField>
        <TextField
          onChangeText={(x) => setPasswordConfrim(x)}
          secureTextEntry={true}
          label={'Confrim Password'}
          style={[STYLEPASS, { marginBottom: 60 }]}></TextField>
      </View>
      <View style={{ alignItems: 'center', bottom: 65, }}>
        <Button
          onPress={OnPressRegister}
          style={BUTTONCONTAINER}>
          <Text
            style={BUTTONTEXT}>REGISTER</Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#13C4B4', marginTop: 30 }}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
})
