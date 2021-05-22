import { useNavigation } from "@react-navigation/core";
import { observer } from "mobx-react-lite";
import React, { useState } from "react"
import { StyleSheet, ScrollView, View, Text, ViewStyle, TextStyle, ToastAndroid } from 'react-native'
import { Button, Header, TextField } from "../../components";
import { UserModelStore } from "../../models";
import { color } from "../../theme";

const BUTTONCONTAINER: ViewStyle = {
  backgroundColor: '#13C4B4',
  width: 250,
  borderRadius: 50,
  marginTop: 100,
  alignSelf: 'center'
}
const BUTTONTEXT: TextStyle = {
  color: color.palette.white,
  fontWeight: 'bold',
  fontSize: 20
}

export const ChangePassword = observer(() => {
  const navigation = useNavigation()
  const { ChangePassword } = UserModelStore

  const [oldPassword, setOldPassword] = useState('')
  const [confrimPassword, setConfrimPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  return (
    <View style={styles.container}>
      <Header title={"Ganti Password"} navigation={navigation}></Header>
      <ScrollView>
        <TextField
          password={true}
          label={'Password Lama'}
          style={styles.password}
          value={oldPassword}
          onChangeText={(x) => setOldPassword(x)}></TextField>

        <TextField
          password={true}
          label={'Password Baru'}
          style={styles.password}
          value={newPassword}
          onChangeText={(x) => setNewPassword(x)}></TextField>

        <TextField
          password={true}
          label={'Konfirmasi Password Baru'}
          style={styles.password}
          value={confrimPassword}
          onChangeText={(x) => setConfrimPassword(x)}></TextField>

        <Button
          onPress={() => {
            if (oldPassword && newPassword && confrimPassword && newPassword === confrimPassword) {
              ChangePassword({ old_password: oldPassword, new_password: newPassword })
            } else {
              ToastAndroid.show("Password tidak sama", ToastAndroid.SHORT)
            }
          }}
          style={BUTTONCONTAINER}>
          <Text
            style={BUTTONTEXT}>SIMPAN</Text>
        </Button>
      </ScrollView>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.palette.white
  },
  password: {
    marginHorizontal: 24,
    marginTop: 20
  }
})