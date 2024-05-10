"use client";

import React from "react";

import { redirect } from "next/navigation";

import Hexagon from "@/(components)/Hexagon";
import PreHeader from "@/(components)/PreHeader";

function page() {
  const hexagons = [
    { text: "Work enthusiast" },
    { text: "Party person" },
    { text: "No obligation" },
    { text: "Focused on studies" },
  ];

  return (
    <div className="pageContainer">
      <div className="preHeaderWrapper">
        <PreHeader />
      </div>

      <div>
        <Hexagon hexagons={hexagons} route={"/questions_two"} />
      </div>
    </div>
  );
}

export default page;
