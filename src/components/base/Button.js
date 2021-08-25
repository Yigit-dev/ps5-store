import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import {
  color,
  size,
  space,
  flexbox,
  layout,
  compose,
  borderRadius,
  position,
  shadow,
  border,
} from 'styled-system'

const Button = styled(TouchableOpacity)(
  compose(
    color,
    size,
    space,
    flexbox,
    layout,
    border,
    borderRadius,
    position,
    shadow
  )
)

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

export default Button
