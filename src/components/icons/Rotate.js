import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

function SvgRotate(props) {
  return (
    <Svg
      width={280}
      height={90}
      viewBox="0 0 280 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}
    >
      <Path
        d="M279.5 40c0 5.27-3.742 10.4-10.782 15.156-7.023 4.743-17.218 9.035-29.86 12.648C213.579 75.025 178.627 79.5 140 79.5s-73.579-4.474-98.858-11.697C28.5 64.192 18.305 59.9 11.282 55.157 4.242 50.4.5 45.269.5 40c0-5.27 3.742-10.4 10.782-15.155 7.023-4.744 17.218-9.036 29.86-12.648C66.422 4.974 101.373.5 140 .5s73.579 4.474 98.858 11.697c12.642 3.612 22.837 7.904 29.86 12.648C275.758 29.6 279.5 34.73 279.5 40z"
        stroke="#4187FF"
      />
      <Circle cx={140} cy={80} r={9.5} fill="#4187FF" stroke="#4187FF" />
      <Circle cx={140} cy={80} r={6} fill="#EEF2FA" />
    </Svg>
  )
}

export default SvgRotate
