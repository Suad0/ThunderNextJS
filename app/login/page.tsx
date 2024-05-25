"use client";

import React from "react";

import { SignupForm } from "@/(components)/SignUpForm";
import { motion } from "framer-motion";
import HeaderComponent from "@/(components)/HeaderComponent";

function page() {
  return (
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
      <div className="card-container">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="card relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <SignupForm />
        </motion.div>
      </div>
    </div>
  );
}

export default page;
