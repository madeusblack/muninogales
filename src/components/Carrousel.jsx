import React from 'react';
import '../assets/styles/Carrousel.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import phone from '../assets/static/lobby.png';
import mail from '../assets/static/mail.png';

const Carrousel = () => {
  return (
    <div className='carouselLink'>
      <Carousel autoPlay showThumbs={false} infiniteLoop>
        <div>
          <img src={phone} alt='' />
        </div>
        <div>
          <img src={mail} alt='' />
        </div>
      </Carousel>
    </div>
  );
};
export default Carrousel;
