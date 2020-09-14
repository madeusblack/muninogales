import React from 'react';
import '../../assets/styles/Carrousel.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';
import phone from '../../assets/static/carousel/49.jpg';
import mail from '../../assets/static/carousel/56.jpg';
import tercera from '../../assets/static/carousel/114.jpg';
import cuarta from '../../assets/static/carousel/115.jpg';
import quinta from '../../assets/static/carousel/119.png';
import sexta from '../../assets/static/carousel/120.jpg';
import septima from '../../assets/static/carousel/121.png';
import octava from '../../assets/static/carousel/122.jpg';
import novena from '../../assets/static/carousel/123.jpg';
import decima from '../../assets/static/carousel/124.jpg';
import decimoprimera from '../../assets/static/carousel/1.jpg';
import juzgado from '../../assets/static/pdf/carousel/jpl.pdf';
import pdfMuni from '../../assets/static/pdf/carousel/covidmunicipal.pdf';
import calendariobasura from '../../assets/static/pdf/carousel/basura.jpg';
import cuenta2019 from '../../assets/static/pdf/cuenta publica/cp19.pdf';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carrousel = () => (
  <AutoplaySlider
    className='carrousell'
    play={true}
    cancelOnInteraction={true}
    interval={9000}
  >
    <div>
      <img className='image' src={decima} alt='' />
    </div>
    <div>
      <img className='image' src={mail} alt='' />
    </div>
    <div>
      <a href='tel:+56989014868'>
        <img className='image' src={tercera} alt='' />
      </a>
    </div>
    <div>
      <img className='image' src={cuarta} alt='' />
    </div>
    <div>
      <Link to='/saludCarousel'>
        <img className='image' src={quinta} alt='' />
      </Link>
    </div>
    <div>
      <a href={juzgado}>
        <img className='image' src={sexta} alt='' />
      </a>
    </div>
    <div>
      <a href={pdfMuni}>
        <img className='image' src={septima} alt='' />
      </a>
    </div>
    <div>
      <a href={calendariobasura}>
        <img className='image' src={octava} alt='' />
      </a>
    </div>
    <div>
      <a href={cuenta2019}>
        <img className='image' src={novena} alt='' />
      </a>
    </div>
    <div>
      <a href='tel:+56988698591'>
        <img className='image' src={phone} alt='' />
      </a>
    </div>
    <div>
      <a href='tel:+56332280339'>
        <img className='image' src={decimoprimera} alt='' />
      </a>
    </div>
  </AutoplaySlider>
);
export default Carrousel;
