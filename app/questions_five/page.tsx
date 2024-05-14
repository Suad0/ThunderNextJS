"use client";

import React from "react";

import Smilys from "@/(components)/Smilys";
import PreHeader from "@/(components)/PreHeader";

function page() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/assets/images/background.svg")`,
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          textAlign: "center",
        }}
      >
        <div className="preHeaderWrapper">
          <PreHeader />
        </div>

        <div
          className="pageContainer"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Smilys route={"questions_six"} />
          <br />
          <h2 style={{ color: "purple" }}>
            When spending a relaxing evening at Home
          </h2>
        </div>
      </div>
    </>
  );
}

export default page;
