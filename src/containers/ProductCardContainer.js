import React from 'react'
import View from '../components/base/View'

const ProductCardContainer = ({ children, touch, ...props }) => {
  return (
    <View
      width="50%"
      height={380}
      p={16}
      mb={32}
      mr={10}
      justifyContent="space-between"
      bg={touch ? 'bleucHatel' : 'airCraftWhite'}
      borderRadius="normal"
      style={{
        shadowColor: 'blackGrey',
        shadowOffset: {
          width: 1,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
      {...props}
    >
      {children}
    </View>
  )
}

export default ProductCardContainer
