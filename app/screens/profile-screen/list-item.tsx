import React, { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { color } from '../../theme'

interface ListItemProps {
  title: string;
  navigation: () => void;
}

const ListItem = ({ title, navigation }: ListItemProps) => {

  return (
    <TouchableOpacity onPress={navigation} style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>

      <Entypo name={'chevron-small-right'} size={30}></Entypo>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: color.palette.lightGrey
  },
  titleText: {
    fontSize: 16
  }
})

export default memo(ListItem)