"use client";

import React from "react";
import { useRouter } from "next/navigation";
import HexagonSVG from "./HexagonSVG";

interface HexagonProps {
  hexagons: { text: string; src: string }[];
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
            <HexagonSVG src={hex.src} />
            <span>{hex.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hexagon;
