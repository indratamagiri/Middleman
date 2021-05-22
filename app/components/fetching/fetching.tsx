import React from 'react'
import { ActivityIndicator, View, ViewStyle } from 'react-native';
import { color } from "../../theme"

interface FetchingType {
    condition: boolean;
    children: JSX.Element;
    colorSpin?: string | '#FF4E4E';
    style?: ViewStyle
}

export const Fetching = ({
    condition,
     children, 
     colorSpin,
    style
  }: FetchingType) => {
    if (condition) {
      return (
        <View
          style={[{ flex: 1, justifyContent: 'center', backgroundColor: color.palette.white }, style]}
        >
          <ActivityIndicator size="large" color={colorSpin || color.primary} />
        </View>
      );
    }
    return children;
  };