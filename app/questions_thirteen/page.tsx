"use client";

import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

function Page() {
  const [selectedDistrict, setSelectedDistrict] = useState<any>(null);

  const districts = [
    { name: "Innere Stadt (Inner City)", code: 1 },
    { name: "Leopoldtstadt", code: 2 },
    { name: "Landstraße", code: 3 },
  ];

  const onCityChange = (e: { value: any }) => {
    setSelectedDistrict(e.value);
  };

  return (
    <div className="card">
      <div className="flex justify-center items-center h-screen">
        <div className="w-64">
          <Dropdown
            value={selectedDistrict}
            options={districts}
            onChange={onCityChange}
            optionLabel="name"
            placeholder="Select a District"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
