/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
import React, { useEffect, useState } from "react"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { BottomMainNavigation } from './bottom-navigation'
import { PrimaryNavigator } from './primary-navigator'
import { RootParamList } from "./type-navigation"
import { loadString } from "../utils/storage"
import { View } from "react-native"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
const Stack = createNativeStackNavigator<RootParamList>()

const RootStack = () => {

  const [token, setToken] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadString('token').then((payload) => {
      setToken(payload)
      setLoading(false)
    })
  }, [])

  if(loading){
    return(<View></View>)
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName={token ? 'bottomStack' : 'primaryNavigator'}
    >
      <Stack.Screen
        name="bottomStack"
        component={BottomMainNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="primaryNavigator"
        component={PrimaryNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  )
})

RootNavigator.displayName = "RootNavigator"
