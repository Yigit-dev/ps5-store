import React from 'react'
import { Button } from '../base'

import theme from '../../constants/theme'
import { Information } from '../icons'

const InformationButton = ({ onPress, touch }) => {
  return (
    <Button onPress={onPress}>
      <Information
        color={touch ? theme.colors.airCraftWhite : theme.colors.blackGrey}
      />
    </Button>
  )
}

export default InformationButton
