"use client";

import React from "react";

import { redirect } from "next/navigation";

import Hexagon from "@/(components)/Hexagon";

function page() {
  const hexagons = [
    { text: "super orderly" },
    { text: "a bit messy" },
    { text: "clean, but relaxed" },
    { text: "city lover" },
    { text: "nature lover" },
  ];

  return (
    <>
      <div>
        <Hexagon hexagons={hexagons} route={"/questions_five"} />
      </div>
    </>
  );
}

export default page;
