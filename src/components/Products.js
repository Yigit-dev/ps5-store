import React, { useState, useCallback } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import ProductCard from './Product/ProductCard'
import { PRODUCT_DATA } from '../data/Product_Data'

const Products = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 300)
  }

  return (
    <FlatList
      data={PRODUCT_DATA}
      numColumns={2}
      contentContainerStyle={{ padding: '5%' }}
      keyExtractor={item => item.id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => (
        <ProductCard item={item} navigation={navigation} />
      )}
    />
  )
}

export default Products
