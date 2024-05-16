"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import PreHeader from "@/(components)/PreHeader";
import HeaderComponent from "@/(components)/HeaderComponent";
import LandingPage from "@/(components)/LandingPage";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/questions_one");
  };

  return (
    <div>
      <HeaderComponent />

      <LandingPage />
    </div>

    /*
    <>
      <div
        style={{
          position: "relative",
          backgroundImage: `url("/assets/images/background.svg")`,
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <HeaderComponent />
        <PreHeader />
        
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            padding: "20px",
          }}
        >
          

        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "25%",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div style={{ textAlign: "center" }}>
              
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onClick={handleButtonClick}
              >
                Go to Questions
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
    */
  );
}
