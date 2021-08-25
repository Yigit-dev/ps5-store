import React from 'react'
import { DrawerActions } from '@react-navigation/native'

import { TopBarContainer } from '../containers'
import { DeepButton, NavigationButton } from './button'

import { Menu, Ps5, Settings } from '../components/icons'
import theme from '../constants/theme'

const TopBar = ({ navigation, bg, ...props }) => {
  return (
    <TopBarContainer bg={bg} {...props}>
      {/* Drawer Navigation */}
      <DeepButton
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Menu color={theme.colors.blackGrey} />
      </DeepButton>

      {/* Logo */}
      <Ps5 color={theme.colors.blackGrey} />

      {/* Settings */}
      <NavigationButton bg="airCraftWhite">
        <Settings color={theme.colors.blackGrey} />
      </NavigationButton>
    </TopBarContainer>
  )
}

export default TopBar
