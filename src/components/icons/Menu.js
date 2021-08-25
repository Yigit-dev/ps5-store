import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgMenu(props) {
  return (
    <Svg
      width={24}
      height={14}
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}
    >
      <G filter="url(#Menu_svg__filter0_ii)" fill="currentColor">
        <Path d="M0 7a1 1 0 011-1h22a1 1 0 110 2H1a1 1 0 01-1-1zM0 1a1 1 0 011-1h22a1 1 0 110 2H1a1 1 0 01-1-1zM0 13a1 1 0 011-1h8a1 1 0 110 2H1a1 1 0 01-1-1z" />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SvgMenu
