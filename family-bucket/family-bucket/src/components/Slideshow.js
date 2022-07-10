import React from 'react';
import image1 from './images/slide_1.jpg';
import image2 from './images/slide_2.jpg';
import image3 from './images/slide_3.jpeg';
import ImageGallery from 'react-image-gallery';


export default function Slideshow() {
  return (
    <ImageGallery items={[
      {
        original: image1,
      },
      {
        original: image2,
      },
      {
        original: image3,
      },
    ]} autoPlay={true} />
  )
}