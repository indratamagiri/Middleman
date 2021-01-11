import { ImageStyle, ImageSourcePropType } from "react-native"

export interface CircleImageProps {
    style?: ImageStyle,
    source: string | ImageSourcePropType,
    size?: number,
    borderRadius?: number
}
