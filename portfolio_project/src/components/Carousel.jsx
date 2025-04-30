import React, { useState } from 'react';
import CarouselCSS from './CSS/Carousel.module.css';

const images = [
  './assets/HomePage.jpg',
  './assets/SecondPage.jpg',
  './assets/ThirdPage.jpg',
  './assets/ProfilePage.jpg',
  './assets/FifthPage.jpg',
  './assets/SixthPage.jpg'
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h6 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3">Found</h6>
      <div className={CarouselCSS.carousel}>
        <button className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-cyan-600 drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={handlePrev}>&lt;-</button>
        <img className={CarouselCSS.img} src={images[index]} alt={`Image ${index}`} />
        <button className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-cyan-600 drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={handleNext}>-&gt;</button>
      </div>
      <p className="text-medium max-w-xl mb-6 font-bold">Starting from scratch I created an app to help people find fun activites for themsevles and family. I started with a wireframe design and then moved into Illustrator to create my apps logo and finaly into Adobe XD to make my vision a reality.</p>
    </div>
  );
};

export default Carousel;