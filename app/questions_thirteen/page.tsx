"use client";

import React, { useState } from "react";
function page() {
  const [selectedDistrict, setSelectedDistrict] = useState<any>(null);

  const districts = [
    { name: "Innere Stadt (Inner City)", code: 1 },
    { name: "Leopoldtstadt", code: 2 },
    { name: "Landstraße", code: 3 },
  ];

  return <div>page</div>;
}

export default page;
