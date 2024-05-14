import React from 'react'
import Image from "next/image";

interface HexagonSVGProps {
  src: string;
}

function HexagonSVG({ src }: HexagonSVGProps) {
  return (
    <div>
        <Image
        src={src}
        alt="Logo"
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
  )
}

export default HexagonSVG;
