import React from "react";

import Hexagon from "@/(components)/Hexagon";

function PreHeader() {
  const svgStyles = {
    visibility: "hidden",
    position: "absolute",
  };

  return (
    <>
      <div className="hex_header_container">
        <div className="hex_header hex_header_pos0"></div>
        <div className="hex_header hex_header_pos1"></div>
        <div className="hex_header hex_header_pos2"></div>
        <div className="hex_header hex_header_pos3"></div>
        <div className="hex_header hex_header_pos4"></div>
        <div className="hex_header hex_header_pos5"></div>
        <div className="hex_header hex_header_pos6"></div>
      </div>

      
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      
    </>
  );
}

export default PreHeader;
