import React from 'react'
import { Image } from 'react-native'
import { View } from './base'

import { BuyButton } from './button'
import { Rotate } from './icons'
import { OutlineText } from './text'

import { ProductDetailContainer } from '../containers'
import FeatureList from './ProductDetail/FeatureList'

const ProductDetails = ({ item }) => {
  return (
    <ProductDetailContainer>
      <View alignItems="center" justifyContent="center">
        <OutlineText>{item.product}</OutlineText>
      </View>

      <View width="100%" height={300}>
        <Image
          source={item.bigImage}
          resizeMode="contain"
          style={{ width: '100%', height: '100%' }}
        />
      </View>

      <View pb={48} alignItems="center">
        <Rotate />
        <FeatureList />
      </View>

      <View pb={80}>
        <BuyButton price={item.price} />
      </View>
    </ProductDetailContainer>
  )
}

export default ProductDetails
