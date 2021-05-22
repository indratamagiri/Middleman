import React, { useEffect } from "react"
import { Image, StyleSheet, ScrollView, View, ViewStyle, TouchableOpacity, } from "react-native"
import { useNavigation } from "@react-navigation/native"
import LinearGradient from "react-native-linear-gradient"
import { Fetching, Text } from "../../components"
import { observer } from "mobx-react-lite"
import { ProfileModelStore, UserModelStore } from "../../models"
import { color } from "../../theme"
import ListItem from './list-item'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  height: 200,
  width: '100%',
  flexDirection: "row",
  padding: 16,
}

export const ProfileScreen = observer(() => {
  const navigation = useNavigation()
  const { Logout } = UserModelStore
  const { GetDataProfile, fetchingProfile, name, email, avatar } = ProfileModelStore

  useEffect(() => {
    GetDataProfile()
  }, [])

  return (
    <Fetching condition={fetchingProfile === 'pending'}>
      <View style={FULL}>
        <ScrollView style={{ flex: 1 }}>
          <LinearGradient colors={['#13C4B4', '#228294']} style={CONTAINER}>
            <Text style={styles.textProfile}>Profile</Text>
          </LinearGradient>
          <View style={styles.viewBottom}>
            <View style={{ elevation: 5, bottom: 50, backgroundColor: color.background }}>
              <Image style={styles.image} source={{ uri: avatar || 'https://qubisastorage.blob.core.windows.net/files/images/ic-profile-pic.png' }}></Image>

              <Text style={styles.textName}>{name || ''}</Text>
              <Text style={styles.textEmail}>{email || ''}</Text>

              <ListItem title={"Tambah Profile"} navigation={() => {
                navigation.navigate('editProfile')
              }}></ListItem>
              <ListItem title={"Change Password"} navigation={() => {
                navigation.navigate('changePassword')
              }}></ListItem>

              <TouchableOpacity
                style={styles.logout}
                onPress={() => {
                  Logout().then((payload) => {
                    if (payload) {
                      navigation.reset({
                        routes: [{ name: 'primaryNavigator' }]
                      });
                    }
                  })
                }}>
                <Text style={{ color: color.error }}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Fetching>
  )
})

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    bottom: 50,
    alignSelf: 'center',
    borderColor: color.palette.lightGrey,
    borderWidth: 0.5
  },
  viewBottom: {
    backgroundColor: color.background,
    paddingHorizontal: 20,
    flex: 1
  },
  textProfile: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  textName: {
    fontSize: 16,
    fontWeight: "600"
  },
  textEmail: {
    fontSize: 16,
    fontWeight: "400"
  },
  logout: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  }
})