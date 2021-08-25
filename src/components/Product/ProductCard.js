import React, { useEffect, useState } from 'react'
import { Image, Animated } from 'react-native'

import { CardBarContainer, ProductCardContainer } from '../../containers'
import { View } from '../base'
import ProductImage from './ProductImage'

import { MediumText, SmallText } from '../text'
import FavouriteButton from '../button/FavouriteButton'
import InformationButton from '../button/InformationButton'

const ProductCard = ({ item, navigation }) => {
  const [touch, setTouch] = useState(false)
  const [fly] = useState(new Animated.Value(0))

  useEffect(() => {
    if (touch) {
      Animated.timing(fly, {
        toValue: -24,
        duration: 360,
        useNativeDriver: false,
      }).start()
    } else {
      Animated.timing(fly, {
        toValue: 0,
        duration: 320,
        useNativeDriver: false,
      }).start()
    }
  }, [fly, touch])

  return (
    <ProductCardContainer touch={touch}>
      {/* Card Top Bar */}
      <CardBarContainer>
        <FavouriteButton data={item} />
        <InformationButton
          onPress={() => navigation.navigate('Detail', item)}
          touch={touch}
        />
      </CardBarContainer>

      {/* Card Center */}
      <ProductImage fly={fly} onPress={() => setTouch(!touch)}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{ width: '100%', height: '100%' }}
        />
      </ProductImage>

      {/* Card Bottom */}
      <View>
        <SmallText>{item.title}</SmallText>
        <MediumText touch={touch}>{item.description}</MediumText>
      </View>
    </ProductCardContainer>
  )
}

export default ProductCard
