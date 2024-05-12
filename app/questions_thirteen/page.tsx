"use client";

import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { motion } from "framer-motion";

import PreHeader from "@/(components)/PreHeader";

function Page() {
  const [selectedDistrict, setSelectedDistrict] = useState<any>(null);
  const [selectedBudget, setSelectedBudget] = useState<any>(null);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  const [val3, setVal3] = useState();

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

  const countries = [
    { name: "Wien", code: "W" },
    { name: "München", code: "M" },
    { name: "Berlin", code: "B" },
    { name: "Zürich", code: "ZH" },
    { name: "Paris", code: "P" },
    { name: "London", code: "L" },
  ];

  const onCountryChange = (e: { value: any }) => {
    setSelectedCountry(e.value);
  };

  const selectedCountryTemplate = (
    option: { name: string; code: string },
    props: { placeholder: string }
  ) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option: any) => {
    return (
      <div className="country-item">
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div>
      <div className="preHeaderWrapper">
        <PreHeader />
      </div>
      <div className="flex justify-center items-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="card-container"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card"
          >
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

              <br></br>

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

              <br></br>

              <div>
                <h2>Which City are you from</h2>
                <Dropdown
                  value={selectedCountry}
                  options={countries}
                  onChange={onCountryChange}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  placeholder="Select yor City"
                  valueTemplate={selectedCountryTemplate}
                  itemTemplate={countryOptionTemplate}
                />
              </div>
            </div>

            

            <div className="mb-4">
              <div>
                <span className="p-float-label">
                  <InputText
                    id="FirstName"
                    value={val1}
                    onChange={(e) => setVal1(e.target.value)}
                  />
                  <label htmlFor="FirstName">First Name</label>
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div>
                <span className="p-float-label">
                  <InputText
                    id="LastName"
                    value={val2}
                    onChange={(e) => setVal2(e.target.value)}
                  />
                  <label htmlFor="LastName">Last Name</label>
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div>
                <span className="p-float-label">
                  <InputText
                    id="email"
                    value={val3}
                    onChange={(e) => setVal3(e.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="button-normal">
                <button
                  className="p-button p-button-default"
                  aria-label="Submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
