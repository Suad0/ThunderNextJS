"use client";

import React from "react";

import { redirect } from "next/navigation";

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
          <Hexagon hexagons={hexagons} route={"/questions_four"} />
        </div>
      </div>
    </>
  );
}

export default page;
