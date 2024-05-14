"use client";

import React from "react";

import { motion } from "framer-motion";

import Hexagon from "@/(components)/Hexagon";
import PreHeader from "@/(components)/PreHeader";

function page() {
  const hexagons = [
    { text: "Asleep before 10 pm ", src: "/assets/images/hexagon6.svg" },
    { text: "Sleep before 10 and 12 pm ", src: "/assets/images/hexagon5.svg" },
    { text: "Night owl sleep after midnight ", src: "/assets/images/hexagon4.svg" },
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
              <Hexagon hexagons={hexagons} route={"/questions_three"} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
