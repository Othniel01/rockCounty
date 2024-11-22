"use client";
import React, { useEffect, useState } from "react";

export default function Blink() {
  const [isVisible, setIsVisible] = useState(true);
  const [color, setColor] = useState("#F8F8F8");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);

      // Generate a random color
      setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }, 180); // Change every 500ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className={`h-5 w-5 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ backgroundColor: color }}
    ></div>
  );
}
