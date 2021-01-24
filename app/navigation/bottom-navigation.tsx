import React from "react"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import { HomeScreen, CircleScreen, NotificationScreen, ProfileScreen } from "../screens"
import { color } from "../theme"
import { BottomParamList } from "./type-navigation"

const Tab = createMaterialBottomTabNavigator<BottomParamList>()

export function BottomMainNavigation() {
  return (
    <Tab.Navigator
      activeColor={'#13C4B4'}
      inactiveColor={color.dim}
      shifting={false}
      barStyle={{ backgroundColor: color.background }}
    >
      <Tab.Screen name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen name="circle" component={CircleScreen}
        options={{
          tabBarLabel: 'Circle',
          tabBarIcon: ({ color }) => (
            <Feather name="credit-card" color={color} size={22} />
          ),
        }} />
      <Tab.Screen name="notification" component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" color={color} size={22} />
          ),
        }} />
      <Tab.Screen name="profile" component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" color={color} size={28} />
          ),
        }} />
    </Tab.Navigator>
  )
}
