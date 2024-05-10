import Smilys from "@/(components)/Smilys";
import React from "react";

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
          <Smilys route={"questions_eleven"} />
          <br></br>
          <h2 style={{ color: "violet" }}>
            when a conflict arises
          </h2>
        </div>
      </div>
    </>
  );
}

export default page;