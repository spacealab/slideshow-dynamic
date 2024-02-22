"use client"

import React, { useState } from 'react';

// Assuming you have images in the public/images folder and their names are known
const imagePaths = [
  '/public/images/image1.jpg', // Example path for image1.jpg
  '/public/images/image2.jpg', // Example path for image2.jpg
  '/public/images/image3.jpg', // Example path for image3.jpg
  '/public/images/image4.jpg', // Example path for image4.jpg
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchNewImage = () => {
    setCurrentIndex((currentIndex + 1) % imagePaths.length);
  };

  const showPreviousImage = () => {
    setCurrentIndex((currentIndex - 1 + imagePaths.length) % imagePaths.length);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img src={imagePaths[currentIndex]} alt="Random" className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
      <div className="flex mt-4">
        <button
          onClick={showPreviousImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={fetchNewImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;


