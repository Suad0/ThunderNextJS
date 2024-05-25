import { GlobeComponent } from "@/(components)/GlobeComponent";
import HeaderComponent from "@/(components)/HeaderComponent";
import React from "react";

function page() {
  return (
    <div>
      <HeaderComponent />
      <GlobeComponent />
    </div>
  );
}

export default page;
