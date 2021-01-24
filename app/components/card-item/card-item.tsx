import * as React from "react"
import { TextStyle, View, ViewStyle, Dimensions, Image, ImageStyle, ImageSourcePropType } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import { color, spacing, typography } from "../../theme"
import { Text } from "../"
import { RadioButton } from "../radio-button/radio-button"

const windowWidth = Dimensions.get('window').width

const CONTAINER: ViewStyle = {
  flex: 1,
  borderColor: color.line,
  borderRadius: 8,
  borderWidth: 1.5,
  margin: spacing[3],
  minHeight: 300,
  width: windowWidth - 24,
  backgroundColor: color.palette.white
}

const BASE: ViewStyle = {
  margin: spacing[3],
  flexDirection: 'row',
  justifyContent: 'space-between',
  minHeight: '75%'
}

const BASE_ITEM: ViewStyle = {
  flex: 1
}

const BASE_ICON: ViewStyle = {
  flex: 0.2,
  alignItems: 'flex-end',
  justifyContent: 'space-between',
}

const ITEM_GROUP: ViewStyle = {
  marginLeft: 8,
  marginTop: 8
}

const TEXT_TITLE: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 18,
}

const TEXT_BOTTOM: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 18,
  fontWeight: '700',
  textAlign: 'right',
  marginHorizontal: spacing[3]
}

const IMG: ImageStyle = {
  width: 50,
  height: 50
}

export interface CardItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  title: string,
  TextBottom,
  imageSource: ImageSourcePropType
}

/**
 * Describe your component here
 */
export const CardItem = (props: CardItemProps) => {
  const { style, title, imageSource, TextBottom } = props
  const [radio, setRadio] = React.useState(false)

  return (
    <View style={[CONTAINER, style]} key={title}>
      <View style={BASE}>
        <View style={BASE_ITEM}>
          <Text style={TEXT_TITLE}>{title}</Text>
          <View style={ITEM_GROUP}>
            <RadioButton active={radio}
              onPress={() => setRadio(!radio)}
            />
          </View>
        </View>
        <View style={BASE_ICON}>
          <Image style={IMG} source={imageSource}/>
          <Entypo name={'plus'} size={40}></Entypo>
        </View>
      </View>
      <Text style={TEXT_BOTTOM}>{TextBottom}</Text>
    </View>
  )
}
