import React from 'react'
import { Text } from '../base'

const MediumText = ({ children, touch, ...props }) => {
  return (
    <Text
      color={touch ? 'airCraftWhite' : 'bleucHatel'}
      fontSize={16}
      style={{ fontFamily: 'DrukWideMedium' }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default MediumText
