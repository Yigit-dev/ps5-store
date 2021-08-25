import React from 'react'
import { ScrollView } from 'react-native'
import { View } from '../components/base'

const ProductDetailContainer = ({ children }) => {
  return (
    <View
      as={ScrollView}
      bg="airCraftWhite"
      p={40}
      borderTopLeftRadius="full"
      borderTopRightRadius="full"
      height="100%"
    >
      {children}
    </View>
  )
}

export default ProductDetailContainer
