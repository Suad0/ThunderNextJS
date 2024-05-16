import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

function AnimatedHexagonTooltip() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image: "/assets/images/hexagon1.svg",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image: "/assets/images/hexagon1.svg",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image: "/assets/images/hexagon1.svg",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default AnimatedHexagonTooltip;
