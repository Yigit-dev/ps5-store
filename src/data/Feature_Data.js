import React from 'react'
import { Headset, Microphone, Motion } from '../components/icons'
import theme from '../constants/theme'

export const FEATURE_DATA = [
  {
    id: '5',
    icon: <Microphone color={theme.colors.sapphire} />,
    title: 'Built-In Microphone',
  },
  {
    id: '6',
    icon: <Headset color={theme.colors.sapphire} />,
    title: 'Headset Jack',
  },
  {
    id: '7',
    icon: <Motion color={theme.colors.sapphire} />,
    title: 'Motion Sensor',
  },
]
