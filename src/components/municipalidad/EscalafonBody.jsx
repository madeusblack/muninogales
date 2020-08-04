import React from 'react';
import escalafon from '../../assets/static/pdf/municipalidad/escalafon.pdf';
import pdfImg from '../../assets/static/PDF.svg';
import '../../assets/styles/LayoutContenidoMuniComuna.scss';

const EscalafonBody = () => (
  <div className='muniEscalafon'>
    <h1 className='muniTitle'>ESCALAFÓN MUNICIPAL</h1>
    <a className='escalafonPdf' href={escalafon}>
      <img className='pdfImg' src={pdfImg} alt='' />
      Escalafon Municipal

    </a>
  </div>
);
export default EscalafonBody;
