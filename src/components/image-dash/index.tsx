"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Dash() {
  const [imageIndex, setImageIndex] = useState(0);

  // Array of image sources
  const images = [
    "/img/image-one.webp",
    "/img/static-two.jpeg",
    "/img/download.gif",
    "/img/image-six.webp",
    "/img/image-five.webp",
    "/img/image-seven.webp",
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const changeImage = () => {
      const randomDelay = Math.random() * (2000 - 500) + 500; // Random delay between 500ms and 2000ms
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through the images
      timeoutId = setTimeout(changeImage, randomDelay); // Call the function again with a random delay
    };

    changeImage(); // Start the image changing process

    // Cleanup interval on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full h-full">
      <Image
        src={images[imageIndex]}
        alt="Cover Image"
        className="object-cover h-full w-full"
        width={6740}
        height={6740}
        quality={100}
      />
    </div>
  );
}
