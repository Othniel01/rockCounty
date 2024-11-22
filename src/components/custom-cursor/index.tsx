"use client";

import React, { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hidden sm:block">
      {/* Custom cursor */}
      <div
        style={{
          position: "fixed",
          top: position.y - 1, // Adjust for cursor size
          left: position.x - 1, // Adjust for cursor size
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          border: "2px solid white",
          backgroundColor: "red",
          pointerEvents: "none", // Prevent interference with other elements
          transform: "translate(-50%, -50%)",
          zIndex: 1000, // Ensure it appears above other content
        }}
      ></div>
    </div>
  );
}
