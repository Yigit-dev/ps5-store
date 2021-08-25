import React from 'react'
import { Text } from '../base'

const SmallText = ({ children, ...props }) => {
  return (
    <Text
      color="blackGrey"
      mb={8}
      fontSize={10}
      style={{ fontFamily: 'MontserratRegular' }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default SmallText
