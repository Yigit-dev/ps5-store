import React from 'react'
import { Text } from '../base'

const BoldText = ({ children, ...props }) => {
  return (
    <Text
      color="airCraftWhite"
      fontSize={20}
      style={{ fontFamily: 'MontserratSemiBold' }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default BoldText
