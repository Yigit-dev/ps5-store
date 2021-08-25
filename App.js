import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'

import Navigation from './src/navigation/Navigation'
import theme from './src/constants/theme'
import { useFonts } from '@use-expo/font'

export default function App() {
  const [isLoaded] = useFonts(theme.fonts)
  if (!isLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider forceInset={{ top: 'always' }}>
            <Navigation />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    )
  }
}
