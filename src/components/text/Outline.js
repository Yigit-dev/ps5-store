import React from 'react'
import { Text } from '../base'
// It's not like in css. I've searched a lot. I haven't fount a logical solution yet.

const OutlineText = ({ children, ...props }) => {
  return (
    <Text
      color="blackGrey"
      fontSize={50}
      textAlign="center"
      style={{ fontFamily: 'MontserratSemiBold', textTransform: 'uppercase' }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default OutlineText
