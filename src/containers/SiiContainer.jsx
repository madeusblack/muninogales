import React from 'react';
import '../assets/styles/LayoutDestacados.scss';
import agricolas from '../assets/static/destacados/agricolas.pdf';
import noagricolas from '../assets/static/destacados/noagricolas.pdf';
import pdfImg from '../assets/static/PDF.svg';

const SiiContainer = () => {
  return (
    <div className='seccionDestacadaContainer'>
      <h2>IMPUESTO TERRITORIAL</h2>
      <h3 className='subTitleDestacados'>2020</h3>

      <div className='containerLinksDestacados'>
        <a className='linkDestacados' href={agricolas}>
          <img className='pdfImg' src={pdfImg} alt='' />
          Reavalúo Bienes Raíces Agrícolas
        </a>
        <a className='linkDestacados' href={noagricolas}>
          <img className='pdfImg' src={pdfImg} alt='' />
          Reavalúo de Sitios no Edificados, Propiedades Abandonadas o Pozos Lastreros
        </a>
      </div>

    </div>
  );
};
export default SiiContainer;
