import React from 'react'
import { FlatList } from 'react-native'
import Feature from '../box/Feature'
import { BoldText } from '../text'
import { FEATURE_DATA } from '../../data/Feature_Data'

const FeatureList = () => {
  return (
    <FlatList
      data={FEATURE_DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      contentContainerStyle={{ padding: '2%' }}
      renderItem={({ item }) => (
        <Feature>
          {item.icon}
          <BoldText color="#000" fontSize={14}>
            {item.title}
          </BoldText>
        </Feature>
      )}
    />
  )
}

export default FeatureList
