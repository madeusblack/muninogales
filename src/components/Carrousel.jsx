import React from 'react';
import '../assets/styles/Carrousel.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import phone from '../assets/static/carousel/49.jpg';
import mail from '../assets/static/carousel/56.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carrousel = () => (
  <AutoplaySlider
    className='carrousell'
    play={true}
    cancelOnInteraction={false}
    interval={3000}

  >
    <div>
      <a href="http://www.google.cl">
        <img className='image' src={phone} alt='' />
      </a>
    </div>
    <div><img className='image' src={mail} alt=""/></div>
    <div>3</div>
    <div>4</div>
  </AutoplaySlider>
);
export default Carrousel;