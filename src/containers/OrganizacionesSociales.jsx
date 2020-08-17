import React from 'react';
import '../assets/styles/LayoutDestacados.scss';
import comunicacion from '../assets/static/destacados/comunicacion.pdf';
import antecedentes from '../assets/static/destacados/antecedentes.pdf';
import comprobante from '../assets/static/destacados/comprobante.pdf';
import pdfImg from '../assets/static/PDF.svg';

const OrganizacionesSociales = () => {
  return (
    <div className='seccionDestacadaContainer'>
      <h2>ORGANIZACIONES SOCIALES - ELECCIONES</h2>
      <h3 className='subTitleDestacados'>DOCUMENTACIÓN</h3>

      <div className='containerLinksDestacados'>
        <a className='linkDestacados' href={comunicacion}>
          <img className='pdfImg' src={pdfImg} alt='' />
          COMUNICACIÓN FECHA DE LA ELECCIÓN DEL DIRECTORIO
        </a>
        <a className='linkDestacados' href={antecedentes}>
          <img className='pdfImg' src={pdfImg} alt='' />
          ANTECEDENTES PARA RENOVACIÓN DE DIRECTORIO
        </a>
        <a className='linkDestacados' href={comprobante}>
          <img className='pdfImg' src={pdfImg} alt='' />
          COMPROBANTE DE DEPÓSITO DE LOS DOCUMENTOS DE LA ELECCIÓN
        </a>
      </div>

    </div>
  );
};
export default OrganizacionesSociales;
