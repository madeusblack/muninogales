import React from 'react';
import escalafon from '../../assets/static/pdf/municipalidad/escalafon.pdf';
import pdfImg from '../../assets/static/PDF.svg';
import '../../assets/styles/LayoutContenidoMuniComuna.scss';
import Organigrama from './Organigrama';

const EscalafonBody = () => (
  <div className='escalafonContainer'>
    <h1 className='muniTitle'>ORGANIGRAMA MUNICIPAL</h1>
    <div />

    <a className='escalafonPdf' href={escalafon}>
      <img className='pdfImg' src={pdfImg} alt='' />
      Escalafón Municipal
    </a>
    <Organigrama />
  </div>
);
export default EscalafonBody;
