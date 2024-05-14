"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HexagonSVG from "./HexagonSVG";

interface HexagonProps {
  hexagons: { text: string }[];
  route: string;
}

function Hexagon({ hexagons, route }: HexagonProps) {
  const router = useRouter();

  const handleClick = (route: string) => {
    console.log(route);
    router.push(route);
  };

  return (
    <div className="container">
      {hexagons.map((hex, index) => (
        <div
          className={`pos${index}`}
          key={index}
          onClick={() => handleClick(route)}
          style={{
            cursor: "pointer",
            transition: "transform 0.3s",
            display: "inline-block",
            marginRight: "10px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div className="hex-inner">
            <HexagonSVG />
            <span>{hex.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// <img src={hex.image} className="hex-image" alt={hex.text} />

/* <Image
src={hex.image}
alt="Picture"
width={50}
height={5}
className="hex-image"
/>

*/

export default Hexagon;
