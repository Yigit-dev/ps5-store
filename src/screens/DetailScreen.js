import React, { useCallback } from 'react'
import { StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import { View } from '../components/base'
import ProductDetails from '../components/ProductDetails'

import theme from '../constants/theme'
import { Ps5 } from '../components/icons'

const DetailScreen = ({ route }) => {
  const item = route.params
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content')
    }, [])
  )

  return (
    <View
      as={SafeAreaView}
      flex={1}
      bg="blackGrey"
      forceInset={{ top: 'always' }} // for product animation jumping error
    >
      <View width="100%" height="15%" alignItems="center" p={40}>
        <Ps5 color={theme.colors.airCraftWhite} />
      </View>
      <ProductDetails item={item} />
    </View>
  )
}

export default DetailScreen
