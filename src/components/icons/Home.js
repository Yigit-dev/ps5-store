import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgHome(props) {
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
      <G filter="url(#Home_svg__filter0_ii)">
        <Path
          d="M23.355 10.439l-.001-.002-9.791-9.79A2.195 2.195 0 0012 0c-.59 0-1.145.23-1.563.647L.652 10.432l-.01.01a2.212 2.212 0 00.004 3.12 2.197 2.197 0 001.534.648h.39v7.204A2.589 2.589 0 005.157 24h3.83a.703.703 0 00.703-.703v-5.649c0-.65.53-1.18 1.18-1.18h2.26c.65 0 1.18.53 1.18 1.18v5.649c0 .388.314.703.703.703h3.83a2.589 2.589 0 002.587-2.586V14.21h.362a2.213 2.213 0 001.564-3.77zm-.995 2.129a.798.798 0 01-.568.236h-1.066a.703.703 0 00-.703.703v7.907c0 .65-.529 1.18-1.18 1.18h-3.127v-4.946a2.59 2.59 0 00-2.586-2.586h-2.26a2.59 2.59 0 00-2.586 2.586v4.946H5.157c-.65 0-1.18-.53-1.18-1.18v-7.907a.703.703 0 00-.703-.704H2.227a.798.798 0 01-.586-.236.804.804 0 010-1.135v-.001l9.791-9.79A.797.797 0 0112 1.407c.215 0 .416.084.568.236l9.789 9.787.004.004a.805.805 0 01-.001 1.135z"
          fill="currentColor"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SvgHome
