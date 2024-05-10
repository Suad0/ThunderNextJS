"use client";

import React from "react";

import { redirect } from "next/navigation";

import Hexagon from "@/(components)/Hexagon";

function page() {
  const hexagons = [
    { text: "Work enthusiast" },
    { text: "Party person" },
    { text: "No obligation" },
    { text: "Focused on studies" },
  ];

  return (
    <>
      <div>
        <Hexagon hexagons={hexagons} route={"/questions_two"} />
      </div>
    </>
  );
}

export default page;
