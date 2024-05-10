"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface HexagonProps {
  hexagons: { text: string }[];
  route: string;
}

function Hexagon({ hexagons, route }: HexagonProps) {
  const router = useRouter();

  const handleClick = (route: string) => {
    //console.log(`Button ${index + 1} clicked!`);
    console.log(route);
    //redirect(route);

    router.push(route);
  };

  return (
    <div className="container">
      {hexagons.map((hex, index) => (
        <div
          className={`hex pos${index}`}
          key={index}
          onClick={() => handleClick(route)}
        >
          <div className="hex-inner">
            <span>{hex.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hexagon;
