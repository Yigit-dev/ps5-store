import React from 'react'
import { TouchableOpacity, Animated } from 'react-native'
import { View } from '../base'

const ProductImage = ({ children, onPress, fly }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View as={Animated.View} width="100%" maxHeight={230} marginTop={fly}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

export default ProductImage
