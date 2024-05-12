import React from "react";
import Hexagon from "@/(components)/Hexagon";
import Image from "next/image";
import PreHeader from "@/(components)/PreHeader";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/assets/images/background.svg")`, // Corrected
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <PreHeader />
        </div>
        <div>
          <h1>Hallo und willkommen</h1>
        </div>
      </div>
    </>
  );
}
