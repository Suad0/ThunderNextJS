"use client";

import React from "react";

import { motion } from "framer-motion";

import Hexagon from "@/(components)/Hexagon";
import PreHeader from "@/(components)/PreHeader";

function page() {
  const hexagons = [
    { text: "eat everything" },
    { text: "vegan" },
    { text: "vegetarian" },
    { text: "on a special diet" },
  ];

  return (
    <>
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
    </>
  );
}

export default page;
