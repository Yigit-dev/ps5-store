import React from 'react'
import { Button, View } from '../base'
import { BoldText } from '../text'

const BuyButton = ({ price, onPress }) => {
  return (
    <Button
      width="100%"
      height={80}
      borderRadius="full"
      bg="bleucHatel"
      onPress={onPress}
    >
      <View mr="auto">
        <View bg="sapphire" p={30} borderRadius="full">
          <BoldText>${price}</BoldText>
        </View>
      </View>
      <View justifyContent="center" alignItems="center" mr="auto" pr={30}>
        <BoldText fontSize={21}>Buy Now</BoldText>
      </View>
    </Button>
  )
}

export default BuyButton
