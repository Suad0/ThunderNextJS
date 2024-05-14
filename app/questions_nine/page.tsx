import Smilys from "@/(components)/Smilys";
import React from "react";

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
          <Smilys route={"questions_ten"} />
          <br />
          <h2 style={{ color: "purple" }}>
          I made most decisions based on logic
          </h2>
        </div>
      </div>
    </>
  );
}

// I made most decisions based on logic
// questions_ten


export default page;
