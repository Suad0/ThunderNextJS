"use client";

import React from "react";
import { motion } from "framer-motion";

import Hexagon from "@/(components)/Hexagon";
import PreHeader from "@/(components)/PreHeader";

function page() {
  const hexagons = [
    { text: "super orderly", src: "/assets/images/hexagon2.svg" },
    { text: "a bit messy", src: "/assets/images/hexagon3.svg" },
    { text: "clean, but relaxed", src: "/assets/images/hexagon1.svg" },
    { text: "city lover", src: "/assets/images/hexagon7.svg" },
    { text: "nature lover", src: "/assets/images/hexagon6.svg" },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url("/assets/images/background.svg")`,
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="pageContainer">
          <div className="preHeaderWrapper">
            <PreHeader />
          </div>

          <div>
            <Hexagon hexagons={hexagons} route={"/questions_five"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
