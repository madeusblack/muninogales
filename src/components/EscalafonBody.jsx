import React from 'react';
import escalafon from '../assets/static/pdf/municipalidad/escalafon.pdf';
import pdfImg from '../assets/static/pdf.gif';

const EscalafonBody = () => (
  <div className='mainEscalafon'>
    <h1>Escalafon Municipal</h1>
    <a href={escalafon}><img src={pdfImg} alt='' /></a>
  </div>
);
export default EscalafonBody;
