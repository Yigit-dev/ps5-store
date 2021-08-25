import React from 'react'
import { View } from '../components/base'

const NavigationContainer = ({ children }) => {
  return (
    <View
      bg="blackGrey"
      borderTopRightRadius="full"
      borderTopLeftRadius="full"
      width="100%"
      height="100%"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {children}
    </View>
  )
}

export default NavigationContainer
