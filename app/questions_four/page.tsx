"use client";

import React from "react";

import { redirect } from "next/navigation";

import Hexagon from "@/(components)/Hexagon";
import PreHeader from "@/(components)/PreHeader";

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
      <div className="pageContainer">
        <div className="preHeaderWrapper">
          <PreHeader />
        </div>

        <div>
          <Hexagon hexagons={hexagons} route={"/questions_five"} />
        </div>
      </div>
    </>
  );
}

export default page;
