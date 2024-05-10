import React from "react";

import Hexagon from "@/(components)/Hexagon";

function page() {
  const hexagons = [
    { text: "Asleep before 10 pm " },
    { text: "Sleep before 10 and 12 pm " },
    { text: "Night owl sleep after midnight " },
  ];

  return (
    <>
      <div>
        <Hexagon hexagons={hexagons} route={"/questions_three"} />
      </div>
    </>
  );
}

export default page;
