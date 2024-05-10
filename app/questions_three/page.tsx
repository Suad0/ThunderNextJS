"use client";

import React from "react";

import { redirect } from "next/navigation";

import Hexagon from "@/(components)/Hexagon";

function page() {
  const hexagons = [
    { text: "eat everything" },
    { text: "vegan" },
    { text: "vegetarian" },
    { text: "on a special diet" },
  ];

  return (
    <>
      <div>
        <Hexagon hexagons={hexagons} route={"/questions_four"} />
      </div>
    </>
  );
}

export default page;
