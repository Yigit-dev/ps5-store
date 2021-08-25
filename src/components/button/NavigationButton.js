import React from 'react'
import { Button } from '../base'

const NavigationButton = ({ children, onPress, ...props }) => {
  return (
    <Button
      borderRadius="normal"
      width="navigationButton"
      height="navigationButton"
      style={{
        shadowColor: 'blackGrey',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
      }}
      onPress={onPress}
      {...props}
    >
      {children}
    </Button>
  )
}

export default NavigationButton
