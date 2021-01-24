import React, { memo, useState } from 'react'
import { TextStyle, View, ViewStyle, TouchableOpacity } from 'react-native'
import { Text } from '../../components'
import { color, spacing } from '../../theme'

const CONTAINER: ViewStyle = {
  borderColor: color.line,
  borderRadius: 8,
  borderWidth: 1.5,
  marginTop: spacing[4],
  marginHorizontal: spacing[4],
  backgroundColor: color.palette.white
}
const CONTAINER_TITLE: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  padding: 16,
}
const TITLE: TextStyle = {
  flex: 1,
  fontFamily: 'Roboto-Medium'
}
const FONT_DES: TextStyle = {
  fontSize: 11,
  marginBottom: 8
}
const CONTAINER_DES: ViewStyle = {
  flex: 1,
  marginHorizontal: spacing[4],
}
const CONTAINER_SUB: ViewStyle = {
  marginBottom: spacing[4],
  flexDirection: 'row'
}

const CardNotif = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <TouchableOpacity onPress={() => setToggle(!toggle)} style={CONTAINER}>
      <View style={CONTAINER_TITLE}>
        <Text style={TITLE}>Supplay Owen</Text>
        <Text style={TITLE}>Rp 1000000</Text>
        <Text style={TITLE}>Courier</Text>
        <Text style={TITLE}>Complete</Text>
      </View>
      {toggle ? (
        <View style={CONTAINER_SUB}>
          <View style={CONTAINER_DES}>
            <Text style={FONT_DES}>Owen Lesil</Text>
            <Text style={FONT_DES}>Jenis : Produk</Text>
            <Text style={FONT_DES}>Barang : Tak Pernah Setengah Hati Album </Text>
          </View>
          <View style={CONTAINER_DES}>
            <Text style={FONT_DES}>Alamat Pengiriman : Jl Syahdan</Text>
            <Text style={FONT_DES}>Status :  Lunas</Text>
          </View>
          <View style={CONTAINER_DES}>
            <Text style={FONT_DES}>Total Pembayaran : Rp.10000000</Text>
          </View>
        </View>
      ) : null}
    </TouchableOpacity>
  )
}

export default memo(CardNotif)
