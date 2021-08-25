import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from '../screens/HomeScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import CartScreen from '../screens/CartScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false, // only menu button
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
