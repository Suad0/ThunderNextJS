"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface SmilysProps {
  route: string;
}

function Smilys({ route }: SmilysProps) {
  const router = useRouter();
  const [feedback, setFeedback] = useState<number | null>(null);

  const handleClick = (route: string, value: number) => {
    console.log("Feedback:", value);
    console.log("Route:", route);
    router.push(route);
  };

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            onClick={() => handleClick(route, 1)}
            style={{
              marginRight: "10px",
              display: "inline-block",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: feedback === 1 ? "red" : "lightgray",
              }}
            />

            <span>perfect</span>
          </div>

          <div
            onClick={() => handleClick(route, 2)}
            style={{
              marginRight: "10px",
              display: "inline-block",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: feedback === 2 ? "red" : "lightgray",
              }}
            />
            <span>good</span>
          </div>
          <div
            onClick={() => handleClick(route, 3)}
            style={{
              marginRight: "10px",
              display: "inline-block",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: feedback === 3 ? "yellow" : "lightgray",
              }}
            />
            <span>ok</span>
          </div>
          <div
            onClick={() => handleClick(route, 4)}
            style={{
              marginRight: "10px",
              display: "inline-block",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: feedback === 4 ? "green" : "lightgray",
              }}
            />
            <span>mhm</span>
          </div>

          <div
            onClick={() => handleClick(route, 5)}
            style={{
              display: "inline-block",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: feedback === 5 ? "green" : "lightgray",
              }}
            />
            <span>bad</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Smilys;
