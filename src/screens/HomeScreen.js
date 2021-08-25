import React from 'react'
import { StatusBar } from 'react-native'

import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import { View } from '../components/base'
import TopBar from '../components/TopBar'
import Products from '../components/Products'

const HomeScreen = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )
  return (
    <View
      as={SafeAreaView}
      flex={1}
      bg="airCraftWhite"
      forceInset={{ top: 'always' }} // for animation jumping error
    >
      <TopBar navigation={navigation} />
      <Products navigation={navigation} />
    </View>
  )
}

export default HomeScreen
