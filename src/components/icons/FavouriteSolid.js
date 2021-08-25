import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgFavouriteSolid(props) {
  return (
    <Svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}
    >
      <G filter="url(#FavouriteSolid_svg__filter0_ii)">
        <Path
          d="M16.687 1.572A4.549 4.549 0 0013.219 0c-1.897 0-3.098 1.14-3.77 2.096a6.952 6.952 0 00-.449.73 6.946 6.946 0 00-.448-.73C7.879 1.14 6.678 0 4.782 0a4.55 4.55 0 00-3.469 1.572C.466 2.539 0 3.834 0 5.218c0 1.507.585 2.909 1.84 4.41 1.122 1.344 2.737 2.728 4.606 4.33.696.598 1.417 1.215 2.184 1.89l.023.02a.525.525 0 00.694 0l.023-.02c.767-.675 1.488-1.292 2.184-1.89 1.87-1.602 3.484-2.986 4.606-4.33C17.415 8.128 18 6.726 18 5.219c0-1.384-.466-2.68-1.313-3.646z"
          fill="currentColor"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SvgFavouriteSolid
