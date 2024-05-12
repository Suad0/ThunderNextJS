"use client";

import React from "react";


import Smilys from "@/(components)/Smilys";
import PreHeader from "@/(components)/PreHeader";

function page() {
  return (
    <>
      <div className="pageContainer">
        <div className="preHeaderWrapper">
          <PreHeader />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Smilys route={"questions_six"} />
          <br></br>
          <h2 style={{ color: "violet" }}>
            When spending a relaxing evening at Home
          </h2>
        </div>
      </div>
    </>
  );
}

export default page;
