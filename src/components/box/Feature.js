import React from 'react'
import { View } from '../base'

const Feature = ({ children }) => {
  return (
    <View
      px={16}
      py={32}
      width={150}
      height={160}
      borderRadius={40}
      bg="airCraftWhite"
      justifyContent="space-between"
      marginRight={24}
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
    >
      {children}
    </View>
  )
}

export default Feature
