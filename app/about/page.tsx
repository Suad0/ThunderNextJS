import HeaderComponent from "@/(components)/HeaderComponent";
import { TextGenerateEffectComponent } from "@/(components)/TextGenerateEffectComponent";
import React from "react";

function page() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("/assets/images/background.svg")`,
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <HeaderComponent />
        <TextGenerateEffectComponent />
      </div>
    </div>
  );
}

export default page;
