"use client"

import React, { useState } from 'react';

const Slider: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [imageUrls, setImageUrls] = useState<string[]>(['https://picsum.photos/510/310']);

  const fetchNewImage = () => {
    const newUrl = `https://picsum.photos/510/310?random=${Math.random()}`;
    setImageUrls(prevUrls => [...prevUrls, newUrl]);
    setImageIndex(prevIndex => prevIndex + 1);
  };

  const showPreviousImage = () => {
    setImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <div className="flex flex-col p-4">
      <img src={imageUrls[imageIndex]} alt="Random" className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
      <div className="flex mt-4 justify-between">
        <button
          onClick={showPreviousImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[100px] rounded"
          disabled={imageIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={fetchNewImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[100px] rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;

