// src/components/body/photoslider.jsx
import React, { useState, useEffect } from "react";
import "../styles/imageSlider.css";

const imageList = [
  "/slidephoto/img1.jpg",
  "/slidephoto/img2.jpg",
  "/slidephoto/img3.jpeg",
  "/slidephoto/img4.png",
  "/slidephoto/img5.png",
  "/slidephoto/img6.jpeg",
  "/slidephoto/img7.jpeg",
  "/slidephoto/img8.jpeg"
];

const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {imageList.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide-${index}`}
          className={`slide-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default PhotoSlider;
