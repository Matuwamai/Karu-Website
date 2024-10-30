import React, { useState, useEffect } from 'react';
import Image1 from './assets/karu1.jpeg';
import Image2 from './assets/karu2.jpeg';
import Image3 from './assets/karu3.jpeg';
import Image4 from './assets/karu4.jpeg';
import Image5 from './assets/karu5.jpeg';
import Image6 from './assets/karu6.jpeg';

function SlidingBar() {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gray-100">
      
      <img
        className="
          object-cover 
          transition-transform duration-500 ease-in-out 
          w-full h-full md:w-4/5 md:h-4/5
          sm:w-full sm:h-full
        "
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />

      <button
        onClick={prevImage}
        className="
          absolute left-2 text-white bg-black bg-opacity-50 p-3 rounded-full focus:outline-none
          sm:p-2 sm:left-1
          lg:left-5 lg:p-4
        "
      >
        &#10094; 
      </button>

      <button
        onClick={nextImage}
        className="
          absolute right-2 text-white bg-black bg-opacity-50 p-3 rounded-full focus:outline-none
          sm:p-2 sm:right-1
          lg:right-5 lg:p-4
        "
      >
        &#10095; 
      </button>
    </div>
  );
}

export default SlidingBar;
