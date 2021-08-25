import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgShop(props) {
  return (
    <Svg
      width={27}
      height={24}
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}
    >
      <G filter="url(#Shop_svg__filter0_ii)" fill="currentColor">
        <Path d="M8.7 15.834h14.345a.791.791 0 00.76-.575L26.97 4.176a.792.792 0 00-.761-1.01H6.875L6.309.62A.791.791 0 005.537 0H.791a.791.791 0 000 1.583h4.112l2.856 12.863a2.378 2.378 0 00-1.43 2.179A2.377 2.377 0 008.7 19h14.344a.791.791 0 000-1.583H8.701a.792.792 0 01-.002-1.584zM25.16 4.75l-2.712 9.5H9.336l-2.11-9.5H25.16zM8 21.5C8 22.88 9.12 24 10.5 24c1.378 0 2.5-1.121 2.5-2.5 0-1.378-1.122-2.5-2.5-2.5A2.503 2.503 0 008 21.5zm2.5-.833a.834.834 0 010 1.667.834.834 0 010-1.667zM19 21.5c0 1.379 1.121 2.5 2.5 2.5 1.378 0 2.5-1.121 2.5-2.5 0-1.378-1.122-2.5-2.5-2.5a2.503 2.503 0 00-2.5 2.5zm2.5-.833a.834.834 0 010 1.667.834.834 0 010-1.667z" />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SvgShop
