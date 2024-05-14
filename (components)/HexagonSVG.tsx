import React from 'react'
import Image from "next/image";


function HexagonSVG() {
  return (
    <div>
        <Image
        src="/assets/images/hexagon_svg.svg"
        alt="Logo"
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
  )
}

export default HexagonSVG