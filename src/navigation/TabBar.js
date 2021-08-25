import * as React from 'react'

import { View } from '../components/base'
import { NavigationContainer } from '../containers'
import { NavigationButton } from '../components/button'

import { Home, Search, Profile, Shop } from '../components/icons'
import theme from '../constants/theme'

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      bg="airCraftWhite"
      width="100%"
      height="14%"
      borderTopRightRadius="full"
      borderTopLeftRadius="full"
    >
      <NavigationContainer>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true })
            }
          }

          return (
            <NavigationButton key={route.key} onPress={onPress} bg="blackGrey">
              {label === 'HomeTab' && (
                <Home
                  color={
                    isFocused
                      ? theme.colors.sapphire
                      : theme.colors.airCraftWhite
                  }
                />
              )}
              {label === 'Search' && (
                <Search
                  color={
                    isFocused
                      ? theme.colors.sapphire
                      : theme.colors.airCraftWhite
                  }
                />
              )}
              {label === 'Account' && (
                <Profile
                  color={
                    isFocused
                      ? theme.colors.sapphire
                      : theme.colors.airCraftWhite
                  }
                />
              )}
              {label === 'Cart' && (
                <Shop
                  color={
                    isFocused
                      ? theme.colors.sapphire
                      : theme.colors.airCraftWhite
                  }
                />
              )}
            </NavigationButton>
          )
        })}
      </NavigationContainer>
    </View>
  )
}

export default TabBar
