import React from 'react';
import '../../assets/styles/Carrousel.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';
import servel from '../../assets/static/carousel/125.png';
import servelwebp from '../../assets/static/carousel/125.webp';
import phone from '../../assets/static/carousel/49.jpg';
import phonewebp from '../../assets/static/carousel/49.webp';
import mail from '../../assets/static/carousel/56.jpg';
import mailwebp from '../../assets/static/carousel/56.webp';
import tercera from '../../assets/static/carousel/114.jpg';
import tercerawebp from '../../assets/static/carousel/114.webp';
import cuarta from '../../assets/static/carousel/115.jpg';
import cuartawebp from '../../assets/static/carousel/115.webp';
import quinta from '../../assets/static/carousel/119.png';
import sexta from '../../assets/static/carousel/120.jpg';
import sextawebp from '../../assets/static/carousel/120.webp';
import septima from '../../assets/static/carousel/121.png';
import octava from '../../assets/static/carousel/122.jpg';
import octavawebp from '../../assets/static/carousel/122.webp';
import novena from '../../assets/static/carousel/123.jpg';
import novenawebp from '../../assets/static/carousel/123.webp';
import decima from '../../assets/static/carousel/124.jpg';
import decimawebp from '../../assets/static/carousel/124.webp';
import decimoprimera from '../../assets/static/carousel/1.jpg';
import decimoprimerawebp from '../../assets/static/carousel/1.webp';
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
      <a href='https://www.plebiscitonacional2020.cl/' aria-label='plebiscito nacional 2020 elige el pais que quieres' target='_blank' rel='noopener noreferrer'>
        <picture>
          <source srcSet={servelwebp} type='image/webp' />
          <source srcSet={servel} type='image/jpeg' />
          <img className='image' csr={servel} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <picture>
        <source srcSet={decimawebp} type='image/webp' />
        <source srcSet={decima} type='image/jpeg' />
        <img className='image' csr={decima} alt='' />
      </picture>
    </div>
    <div>
      <picture>
        <source srcSet={mailwebp} type='image/webp' />
        <source srcSet={mail} type='image/jpeg' />
        <img className='image' csr={mail} alt='' />
      </picture>
    </div>
    <div>
      <a href='tel:+56989014868'>
        <picture>
          <source srcSet={tercerawebp} type='image/webp' />
          <source srcSet={tercera} type='image/jpeg' />
          <img className='image' csr={tercera} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <picture>
        <source srcSet={cuartawebp} type='image/webp' />
        <source srcSet={cuarta} type='image/jpeg' />
        <img className='image' csr={cuarta} alt='' />
      </picture>
    </div>
    <div>
      <Link to='/saludCarousel'>
        <img className='image' src={quinta} alt='' />
      </Link>
    </div>
    <div>
      <a href={juzgado}>
        <picture>
          <source srcSet={sextawebp} type='image/webp' />
          <source srcSet={sexta} type='image/jpeg' />
          <img className='image' csr={sexta} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <a href={pdfMuni}>
        <img className='image' src={septima} alt='' />
      </a>
    </div>
    <div>
      <a href={calendariobasura}>
        <picture>
          <source srcSet={octavawebp} type='image/webp' />
          <source srcSet={octava} type='image/jpeg' />
          <img className='image' csr={octava} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <a href={cuenta2019}>
        <picture>
          <source srcSet={novenawebp} type='image/webp' />
          <source srcSet={novena} type='image/jpeg' />
          <img className='image' csr={novena} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <a href='tel:+56988698591'>
        <picture>
          <source srcSet={phonewebp} type='image/webp' />
          <source srcSet={phone} type='image/jpeg' />
          <img className='image' csr={phone} alt='' />
        </picture>
      </a>
    </div>
    <div>
      <a href='tel:+56332280339'>
        <picture>
          <source srcSet={decimoprimerawebp} type='image/webp' />
          <source srcSet={decimoprimera} type='image/jpeg' />
          <img className='image' csr={decimoprimera} alt='' />
        </picture>
      </a>
    </div>
  </AutoplaySlider>
);
export default Carrousel;
