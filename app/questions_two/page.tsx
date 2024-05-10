import React from "react";

import Hexagon from "@/(components)/Hexagon";
import PreHeader from "@/(components)/PreHeader";

function page() {
  const hexagons = [
    { text: "Asleep before 10 pm " },
    { text: "Sleep before 10 and 12 pm " },
    { text: "Night owl sleep after midnight " },
  ];

  return (
    <>
      <div className="pageContainer">
        <div className="preHeaderWrapper">
          <PreHeader />
        </div>

        <div>
          <Hexagon hexagons={hexagons} route={"/questions_three"} />
        </div>
      </div>
    </>
  );
}

export default page;
