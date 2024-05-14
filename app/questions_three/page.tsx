"use client";

import React from "react";

import { motion } from "framer-motion";

import Hexagon from "@/(components)/Hexagon";
import PreHeader from "@/(components)/PreHeader";

function page() {
  const hexagons = [
    { text: "eat everything", src: "/assets/images/hexagon5.svg" },
    { text: "vegan", src: "/assets/images/hexagon7.svg" },
    { text: "vegetarian", src: "/assets/images/hexagon6.svg" },
    { text: "on a special diet", src: "/assets/images/hexagon1.svg" },
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Hexagon hexagons={hexagons} route={"/questions_four"} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
