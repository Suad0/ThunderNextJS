import React from "react";
import Hexagon from "@/(components)/Hexagon";
import Image from "next/image";
import PreHeader from "@/(components)/PreHeader";

export default function Home() {
  const hexagons = [
    { text: "Work enthusiast" },
    { text: "Party person" },
    { text: "No obligation" },
    { text: "Focused on studies" },
  ];

  return (
    <>
      <div>
        <h1>Hallo und willkommen</h1>
      </div>
    </>
  );
}
