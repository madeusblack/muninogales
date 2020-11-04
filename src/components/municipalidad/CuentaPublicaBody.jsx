/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import pdfImg from '../../assets/static/PDF.svg';
import Cuenta from '../../assets/static/municipalidad/cuenta1.jpg';
import Cuenta2019 from '../../assets/static/pdf/cuenta publica/cp19.pdf';
import Cuenta2018 from '../../assets/static/pdf/cuenta publica/cp18.pdf';
import Cuenta2017 from '../../assets/static/pdf/cuenta publica/cp17.pdf';
import Cuenta2016 from '../../assets/static/pdf/cuenta publica/cp16.pdf';
import Cuenta2015 from '../../assets/static/pdf/cuenta publica/cp15.pdf';
import Cuenta2014 from '../../assets/static/pdf/cuenta publica/cp14.pdf';
import Cuenta2013 from '../../assets/static/pdf/cuenta publica/cp13.pdf';

import styles from '../../assets/styles/LayoutContenidoMuniComuna.module.css';

const CuentaPublicaBody = () => (
  <div className={styles.muniContainer}>
    <h1 className={styles.muniTitle}>CUENTA PUBLICA</h1>
    <img className={styles.imgMunicipalidad} src={Cuenta} alt='' />

    <h3>
      Apreciados vecinas y vecinos,
      Mediante la Cuenta de Gestión de la Municipalidad de Nogales, se muestra cómo la visión de futuro del municipio se transforma en acciones específicas, en programas y proyectos que dan como resultado obras que benefician a los habitantes de la comuna. En un contexto donde está presente nuestra identidad, se reconocen las raíces y se manifiesta la diversidad en el quehacer del municipio.
      Los invito a revisar estas cuentas de gestión, que muestra en detalle las obras, programas y actividades.
      Atentamente,
      Margarita Osorio Pizarro
      Alcaldesa
      Municipalidad de Nogales
    </h3>
    <div className={styles.cuentaPublicaMainContainer}>
      <a name='2019' href={Cuenta2019}>
        <img src={pdfImg} alt='' />
        2019
      </a>
      <a name='2018' href={Cuenta2018}>
        <img src={pdfImg} alt='' />
        2018
      </a>
      <a name='2017' href={Cuenta2017}>
        <img src={pdfImg} alt='' />
        2017
      </a>
      <a name='2016' href={Cuenta2016}>
        <img src={pdfImg} alt='' />
        2016
      </a>
      <a name='2015' href={Cuenta2015}>
        <img src={pdfImg} alt='' />
        2015
      </a>
      <a name='2014' href={Cuenta2014}>
        <img src={pdfImg} alt='' />
        2014
      </a>
      <a name='2013' href={Cuenta2013}>
        <img src={pdfImg} alt='' />
        2013
      </a>
      <a name='2012' href={Cuenta2013}>
        <img src={pdfImg} alt='' />
        2012
      </a>
      <a name='2011' href={Cuenta2013}>
        <img src={pdfImg} alt='' />
        2011
      </a>
    </div>
  </div>
);
export default CuentaPublicaBody;
