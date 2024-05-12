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
        }}
      >
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
            <Smilys route={"questions_nine"} />
            <br></br>
            <h2 style={{ color: "violet" }}>Discussing future possibilities</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
