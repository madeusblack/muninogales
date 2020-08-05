import React from 'react';
import '../assets/styles/Carrousel.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import phone from '../assets/static/carousel/49.jpg';
import mail from '../assets/static/carousel/56.jpg';

const Carrousel = () => {
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop className='carouselLink'>
      <a href='www.google.com'>
        <img src={phone} alt='' className='carrouselImage' />
      </a>
      <div>
        <img src={mail} alt='' className='carrouselImage' />
      </div>
    </Carousel>
  );
};
export default Carrousel;
