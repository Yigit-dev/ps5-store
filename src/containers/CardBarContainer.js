import React from 'react'
import View from '../components/base/View'

const CardBarContainer = ({ children, ...props }) => {
  return (
    <View
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pb={20}
      {...props}
    >
      {children}
    </View>
  )
}

export default CardBarContainer
