"use client"

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

const imagePaths = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const fetchNewImage = () => {
    setCurrentIndex((currentIndex + 1) % imagePaths.length);
  };

  const showPreviousImage = () => {
    setCurrentIndex((currentIndex - 1 + imagePaths.length) % imagePaths.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) fetchNewImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <div className="flex flex-col p-4">
      <div className="relative w-510 h-310" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <Image width={510} height={310} src={imagePaths[currentIndex]} alt="Random" objectFit="cover" />
      </div>
      <div className="flex mt-4 justify-between">
        <button onClick={showPreviousImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[100px] py-2 rounded">
          Previous
        </button>
        <button onClick={fetchNewImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[100px] rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;