import { View as V } from 'react-native'
import styled from 'styled-components'
import {
  color,
  size,
  space,
  border,
  flexbox,
  compose,
  borderTopLeftRadius,
  borderTopRightRadius,
} from 'styled-system'

const View = styled(V)(
  compose(
    color,
    size,
    space,
    flexbox,
    border,
    borderTopLeftRadius,
    borderTopRightRadius
  )
)

export default View
