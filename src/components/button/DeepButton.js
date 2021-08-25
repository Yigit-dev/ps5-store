import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ShadowBox } from 'react-native-neomorph-shadows'
import { Button, View } from '../base'

const DeepButton = ({ children, ...props }) => {
  return (
    <View justifyContent="center" alignItems="center">
      <LinearGradient
        start={[1, 1]}
        end={[0, 0]}
        colors={['#ddd', '#eee', '#fff']}
        style={{ borderRadius: 16 }}
      >
        <Button borderRadius="normal" margin={3} {...props}>
          <ShadowBox
            inner
            useSvg
            style={{
              shadowOffset: { width: 8, height: 6 },
              shadowOpacity: 1,
              shadowColor: '#ddd',
              shadowRadius: 5,
              borderRadius: 16,
              backgroundColor: '#fff',
              width: 56,
              height: 56,
            }}
          >
            <Button
              borderRadius="normal"
              width="navigationButton"
              height="navigationButton"
              bg="airCraftWhite"
            >
              {children}
            </Button>
          </ShadowBox>
        </Button>
      </LinearGradient>
    </View>
  )
}

export default DeepButton
