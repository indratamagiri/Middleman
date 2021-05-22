import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, Text, ViewStyle, TextStyle, Image } from 'react-native'
import { Button, Header, TextField } from '../../components'
import { color } from '../../theme'
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { ProfileModelStore } from '../../models';
import * as ImagePicker from 'react-native-image-picker';
import { launchImage } from '../../utils/photo';

const BUTTONCONTAINER: ViewStyle = {
  backgroundColor: '#13C4B4',
  width: 250,
  borderRadius: 50,
  marginTop: 10,
  marginBottom: 20,
  alignSelf: 'center'
}

const BUTTONTEXT: TextStyle = {
  color: color.palette.white,
  fontWeight: 'bold',
  fontSize: 16
}

export const EditProfile = observer(() => {
  const navigation = useNavigation()
  const { AddPhoneNumber, telphone, avatar, AddPhoto, AddAddress } = ProfileModelStore

  const [telp, setTelp] = useState(telphone)
  const [address, setAddress] = useState('')
  const [response, setResponse] = useState<ImagePicker.ImagePickerResponse>(null);

  return (
    <View style={{ backgroundColor: color.palette.white, flex: 1 }}>
      <Header title={"Tambah Profile"} navigation={navigation}></Header>

      <ScrollView>
        <Image style={styles.image} source={{ uri: avatar || (response?.uri || 'https://qubisastorage.blob.core.windows.net/files/images/ic-profile-pic.png') }}></Image>
        <Button
          onPress={() => {
            launchImage(setResponse)
          }}
          style={BUTTONCONTAINER}>
          <Text
            style={BUTTONTEXT}>Tambah Photo Profile</Text>
        </Button>
        <Button
          onPress={() => {
            AddPhoto(response?.uri || '')
          }}
          style={BUTTONCONTAINER}>
          <Text
            style={BUTTONTEXT}>Simpan Photo Profile</Text>
        </Button>

        <TextField
          label={'Tambah no Telephone'}
          style={styles.field}
          value={telp}
          keyboardType={'number-pad'}
          onChangeText={(x) => setTelp(x)}></TextField>

        <Button
          onPress={() => {
            if (telp) {
              AddPhoneNumber(telp)
            }
          }}
          style={BUTTONCONTAINER}>
          <Text
            style={BUTTONTEXT}>Simpan nomor Telephone</Text>
        </Button>

        <TextField
          label={'Tambah Alamat'}
          style={styles.field}
          value={address}
          onChangeText={(x) => setAddress(x)}></TextField>

        <Button
          onPress={() => {
            if (address) {
              AddAddress(address)
            }
          }}
          style={BUTTONCONTAINER}>
          <Text
            style={BUTTONTEXT}>Simpan Alamat</Text>
        </Button>
      </ScrollView>
    </View>
  )
})

const styles = StyleSheet.create({
  field: {
    marginHorizontal: 24,
    marginTop: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
    borderColor: color.palette.lightGrey,
    borderWidth: 0.5
  },
})