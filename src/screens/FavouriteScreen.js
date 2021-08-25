import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductCard from '../components/Product/ProductCard'
import TopBar from '../components/TopBar'

const FavouriteScreen = ({ navigation }) => {
  const state = useSelector(state => state.favourite)
  return (
    <View
      as={SafeAreaView}
      flex={1}
      bg="airCraftWhite"
      forceInset={{ top: 'always' }}
    >
      <TopBar navigation={navigation} height="25%" />
      <FlatList
        data={state}
        numColumns={2}
        contentContainerStyle={{ padding: '5%' }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCard item={item} navigation={navigation} />
        )}
      />
    </View>
  )
}

export default FavouriteScreen
