import React from 'react';
import escalafon from '../../assets/static/pdf/municipalidad/escalafon.pdf';
import pdfImg from '../../assets/static/PDF.svg';
import styles from '../../assets/styles/LayoutContenidoMuniComuna.module.css';
import Organigrama from './Organigrama';

const EscalafonBody = () => (
  <div className={styles.escalafonContainer}>
    <h1 className={styles.muniTitle}>ORGANIGRAMA MUNICIPAL</h1>
    <div />

    <a className={styles.escalafonPdf} href={escalafon}>
      <img className={styles.pdfImg} src={pdfImg} alt='' />
      Escalafón Municipal
    </a>
    <Organigrama />
  </div>
);
export default EscalafonBody;
