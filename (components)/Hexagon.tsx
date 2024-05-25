"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HexagonSVG from "./HexagonSVG";
import { motion } from "framer-motion";

interface HexagonProps {
  hexagons: { text: string; src: string }[];
  route: string;
}

function Hexagon({ hexagons, route }: HexagonProps) {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div className="container">
        {hexagons.map((hex, index) => (
          <div
            className={`pos${index}`}
            key={index}
            onClick={() => handleClick(route)}
            onMouseEnter={() => {
              setHoveredIndex(index);
              document.querySelector(`.pos${index}`).style.transform =
                "scale(1.2)";
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              document.querySelector(`.pos${index}`).style.transform =
                "scale(1)";
            }}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s",
              display: "inline-block",
              marginRight: "10px",
            }}
          >
            <div className="hex-inner">
              <HexagonSVG src={hex.src} />
              {hoveredIndex === index && (
                <div className="tooltip">
                  <span className="tooltiptext">{hex.text}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Hexagon;
