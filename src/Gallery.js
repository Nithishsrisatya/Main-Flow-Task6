import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './Gallery.css';

const images = [
  '/images/url1.jpg',
  '/images/url2.jpg',
  '/images/url3.jpg',
  '/images/url4.jpg',
  '/images/url5.jpeg',
  '/images/url6.png',
  '/images/url7.png',
  '/images/url8.jpg',
  '/images/url9.jpg',
  '/images/url10.jpg',
  '/images/url11.jpg',
  '/images/url12.jpg',
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <ImageItem key={index} src={src} onClick={() => setSelectedImageIndex(index)} />
      ))}
      {selectedImageIndex !== null && (
        <Modal
          src={images[selectedImageIndex]}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default Gallery;
