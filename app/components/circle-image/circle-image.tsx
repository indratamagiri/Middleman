import React from 'react'
import { Image, ImageStyle } from 'react-native'
import { color } from '../../theme'
import { CircleImageProps } from './circle-image.props'

const IMAGE_BASE: ImageStyle = {
  borderColor: color.borderImage,
  borderRadius: 25,
  width: 30,
  height: 30,
  borderWidth: 1
}

export const CircleImage = (props: CircleImageProps) => {
  const { source, style: styleOverride, size, borderRadius } = props
  const imageSize = size ? { width: size, height: size } : {}
  const image = (typeof source === 'string') ? {
    uri: source,
  } : source
  const borderImage = borderRadius ? { borderRadius } : {}

  return (
    <Image
      style={{ ...IMAGE_BASE, ...styleOverride, ...imageSize, ...borderImage }}
      source={image}
    />
  )
}
