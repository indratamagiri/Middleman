import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { color } from '../../theme';

interface Props {
  navigation?: any,
  title?: string,
  containerStyle?: {},
  titleStyle?: {},
  backAction?: () => void,
  children?: React.ReactNode,
  rightButton?: React.ReactNode,
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    elevation: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1, height: 3
    },
    zIndex: 99,
    backgroundColor: color.palette.white,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 16
  }
});

export const Header = (props: Props) => {
  const {
    navigation,
    title,
    containerStyle,
    titleStyle,
    backAction = () => navigation.goBack(),
    children,
    rightButton
  } = props;

  return (
    <View
      style={{
        ...styles.mainContainer,
        ...containerStyle
      }}
    >
      {navigation && (
        <TouchableOpacity
          style={{
            marginRight: 20,
            padding: 4
          }}
          onPress={backAction}
        >
          <MaterialIcons
            name="arrow-back"
            size={22}
          />
        </TouchableOpacity>
      )}
      {children || (
        <Text
          style={{
            ...styles.titleText,
            width: rightButton ? '70%' : '86%',
            ...titleStyle
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      )}
      <View style={{ position: 'absolute', right: 16 }}>
        {rightButton}
      </View>
    </View>
  );
};