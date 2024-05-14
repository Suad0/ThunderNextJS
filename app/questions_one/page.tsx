"use client";

import React from "react";
import Hexagon from "@/(components)/Hexagon";
import PreHeader from "@/(components)/PreHeader";
import { motion } from "framer-motion";

function Page() {
  const hexagons = [
    { text: "Work enthusiast", src: "/assets/images/hexagon1.svg" },
    { text: "Party person", src: "/assets/images/hexagon2.svg" },
    { text: "No obligation", src: "/assets/images/hexagon3.svg" },
    { text: "Focused on studies", src: "/assets/images/hexagon4.svg" },
  ];

  return (
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
            <Hexagon hexagons={hexagons} route={"/questions_two"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page;
