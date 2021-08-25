import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgSearch(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}
    >
      <G filter="url(#Search_svg__filter0_ii)">
        <Path
          d="M.293 22.293l6.825-6.825A9.454 9.454 0 015 9.5C5 4.262 9.262 0 14.5 0S24 4.262 24 9.5 19.738 19 14.5 19a9.454 9.454 0 01-5.968-2.118l-6.825 6.825a.997.997 0 01-1.414 0 .999.999 0 010-1.414zM14.5 17c4.136 0 7.5-3.364 7.5-7.5S18.636 2 14.5 2 7 5.364 7 9.5s3.364 7.5 7.5 7.5z"
          fill="currentColor"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SvgSearch
