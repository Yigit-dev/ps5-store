import React from 'react'
import View from '../components/base/View'

const TopBarContainer = ({ children, ...props }) => {
  return (
    <View
      p={16}
      width="100%"
      height="18%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    >
      {children}
    </View>
  )
}

export default TopBarContainer
