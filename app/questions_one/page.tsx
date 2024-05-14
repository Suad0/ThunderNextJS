"use client";

import React from "react";

import Hexagon from "@/(components)/Hexagon";
import PreHeader from "@/(components)/PreHeader";
import { motion } from "framer-motion";

function Page() {
  const hexagons = [
    { text: "Work enthusiast" },
    { text: "Party person" },
    { text: "No obligation" },
    { text: "Focused on studies" },
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
