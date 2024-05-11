"use client";

import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

function Page() {
  const [selectedDistrict, setSelectedDistrict] = useState<any>(null);
  const [selectedBudget, setSelectedBudget] = useState<any>(null);

  const districts = [
    { name: "Innere Stadt (Inner City)", code: 1 },
    { name: "Leopoldtstadt", code: 2 },
    { name: "Landstraße", code: 3 },
  ];

  const onCityChange = (e: { value: any }) => {
    setSelectedDistrict(e.value);
  };

  const budgetForRoom = [
    { name: "€ 400 - 480", code: 1 },
    { name: "€ 480 - 540", code: 2 },
    { name: "€ 540 - 660", code: 3 },
  ];
  const onBudgetChange = (e: { value: any }) => {
    setSelectedBudget(e.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card-container">
        <div className="card">
          <div className="mb-4">
            <div>
              <h2>What is your Budget for a room</h2>
              <Dropdown
                value={selectedBudget}
                options={budgetForRoom}
                onChange={onBudgetChange}
                optionLabel="name"
                placeholder="Select your Budget"
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div>
              <h2>Choose your favorite district </h2>
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
      </div>
    </div>
  );
}

export default Page;
