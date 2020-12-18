import React from 'react';
import '../../assets/styles/Carrousel.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';
import laboral from '../../assets/static/carousel/afiche1920.jpg';
import laboralwebp from '../../assets/static/carousel/afiche1920.webp';
import phone from '../../assets/static/carousel/49.jpg';
import phonewebp from '../../assets/static/carousel/49.webp';
import quinta from '../../assets/static/carousel/119.png';
import sexta from '../../assets/static/carousel/120.jpg';
import sextawebp from '../../assets/static/carousel/120.webp';
import septima from '../../assets/static/carousel/121.png';
import octava from '../../assets/static/carousel/122.jpg';
import octavawebp from '../../assets/static/carousel/122.webp';
import novena from '../../assets/static/carousel/123.jpg';
import novenawebp from '../../assets/static/carousel/123.webp';
import decimoprimera from '../../assets/static/carousel/1.jpg';
import decimoprimerawebp from '../../assets/static/carousel/1.webp';
import juzgado from '../../assets/static/pdf/carousel/jpl.pdf';
import pdfMuni from '../../assets/static/pdf/carousel/covidmunicipal.pdf';
import calendariobasura from '../../assets/static/pdf/carousel/basura.jpg';
import cuenta2019 from '../../assets/static/pdf/cuenta publica/cp19.pdf';
import calendariocachureos from '../../assets/static/carousel/calendariocachureos.jpg';
import cachureos from '../../assets/static/carousel/cachureos.jpg';
import cachureoswebp from '../../assets/static/carousel/cachureos.webp';
import veterinaria from '../../assets/static/carousel/veterinaria.jpg';
import veterinariawebp from '../../assets/static/carousel/veterinaria.webp';
import atletismo from '../../assets/static/carousel/atletismo.jpg';
import atletismowebp from '../../assets/static/carousel/atletismo.webp';
import boxeo from '../../assets/static/carousel/boxeo.jpg';
import boxeowebp from '../../assets/static/carousel/boxeo.webp';
import ciclismo from '../../assets/static/carousel/ciclismo.jpg';
import ciclismowebp from '../../assets/static/carousel/ciclismo.webp';
import zumba from '../../assets/static/carousel/zumba.jpg';
import zumbawebp from '../../assets/static/carousel/zumba.webp';
import navidad from '../../assets/static/carousel/ferianavidad.jpg';
import navidadwebp from '../../assets/static/carousel/ferianavidad.webp';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carrousel = () => (
  <AutoplaySlider
    className='carrousell'
    play={true}
    cancelOnInteraction={true}
    interval={9000}
  >
    <div>
      <picture>
        <source srcSet={navidadwebp} type='image/webp' />
        <source srcSet={navidad} type='image/jpeg' />
        <img className='image' csr={navidad} alt='' />
      </picture>
    </div>
    <div>
      <picture>
        <source srcSet={atletismowebp} type='image/webp' />
        <source srcSet={atletismo} type='image/jpeg' />
        <img className='image' csr={atletismo} alt='' />
      </picture>
    </div>
    <div>
      <picture>
        <source srcSet={ciclismowebp} type='image/webp' />
        <source srcSet={ciclismo} type='image/jpeg' />
        <img className='image' csr={ciclismo} alt='' />
      </picture>
    </div>
    <div>
      <picture>
        <source srcSet={boxeowebp} type='image/webp' />
        <source srcSet={boxeo} type='image/jpeg' />
        <img className='image' csr={boxeo} alt='' />
      </picture>
    </div>
    <div>
      <picture>
        <source srcSet={zumbawebp} type='image/webp' />
        <source srcSet={zumba} type='image/jpeg' />
        <img className='image' csr={zumba} alt='' />
      </picture>
    </div>
    <div>
      <a href='https://ferialaboralvirtualquillota.cl/' target='_blank' rel='noopener noreferrer'>
        <picture>
          <source srcSet={laboralwebp} type='image/webp' />
          <source srcSet={laboral} type='image/jpeg' />
          <img className='image' csr={laboral} alt='' />
        </picture>
      </a>
    </div>

    <div>
      <picture>
        <source srcSet={veterinariawebp} type='image/webp' />
        <source srcSet={veterinaria} type='image/jpeg' />
        <img className='image' csr={veterinaria} alt='' />
      </picture>
    </div>
    <div>
      <a href={calendariocachureos}>
        <picture>
          <source srcSet={cachureoswebp} type='image/webp' />
          <source srcSet={cachureos} type='image/jpeg' />
          <img className='image' csr={cachureos} alt='' />
        </picture>
      </a>
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
