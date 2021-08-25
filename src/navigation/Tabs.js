import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBar from '../navigation/TabBar'
import DrawerNavigator from './DrawerNavigator'
import SearchScreen from '../screens/SearchScreen'
import AccountScreen from '../screens/AccountScreen'
import CartScreen from '../screens/CartScreen'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeTab" component={DrawerNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  )
}

export default Tabs
