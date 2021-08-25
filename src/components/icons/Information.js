import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgInformation(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}
    >
      <Path
        d="M12 0C5.367 0 0 5.368 0 12c0 6.633 5.368 12 12 12 6.633 0 12-5.367 12-12S18.632 0 12 0zm0 22.125A10.12 10.12 0 011.875 12 10.12 10.12 0 0112 1.875 10.12 10.12 0 0122.125 12 10.12 10.12 0 0112 22.125z"
        fill="currentColor"
      />
      <Path
        d="M12 10.047a.937.937 0 00-.938.937v6.037a.937.937 0 101.876 0v-6.037a.937.937 0 00-.938-.937zM12 8.899a1.266 1.266 0 100-2.531 1.266 1.266 0 000 2.53z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default SvgInformation
