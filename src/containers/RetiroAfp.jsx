import React from 'react';
import styles from '../assets/styles/RetiroAfp.module.css';
import capital from '../assets/static/afps/capital.png';
import cuprum from '../assets/static/afps/cuprum.png';
import habitat from '../assets/static/afps/habitat.png';
import modelo from '../assets/static/afps/modelo.png';
import planvital from '../assets/static/afps/planvital.png';
import provida from '../assets/static/afps/provida.png';
import uno from '../assets/static/afps/uno.png';

const RetiroAfp = () => (
  <div className={styles.mainAfpContainer}>
    <h2>
      Si ya realizó su solicitud y ademas esta es a través de su cuenta rut, puede consultar el estado haciendo
      <a href='https://consultami10.cl/' target='_blank' rel='noreferrer noopener'> click aquí</a>
    </h2>
    <h1>Seleccione su AFP:</h1>
    <div className={styles.containerAfp}>
      <a href='https://retiro.afpcapital.cl/login' target='_blank' rel='noopener noreferrer'>
        <img src={capital} alt='' />
      </a>
      <a href='https://www6.cuprum.cl/retiro-fondos-afp-10-porciento' target='_blank' rel='noopener noreferrer'>
        <img src={cuprum} alt='' />
      </a>
      <a href='https://www.retiro10afphabitat.cl/landing' target='_blank' rel='noopener noreferrer'>
        <img src={habitat} alt='' />
      </a>
      <a href='https://www.tu10conmodelo.cl/' target='_blank' rel='noopener noreferrer'>
        <img src={modelo} alt='' />
      </a>
      <a href='https://retirounico.planvital.cl/retiro-fondos' target='_blank' rel='noopener noreferrer'>
        <img src={planvital} alt='' />
      </a>
      <a href='https://retiro.provida.cl/' target='_blank' rel='noopener noreferrer'>
        <img src={provida} alt='' />
      </a>
      <a href='https://www.uno.cl/tramite-online/formulario-retiro' target='_blank' rel='noopener noreferrer'>
        <img src={uno} alt='' />
      </a>
    </div>
    <h3>
      Si no conoce su Afp puede consultarlo en la Superintendencia de Pensiones haciendo
      <a href='https://www.spensiones.cl/apps/certificados/formConsultaAfiliacion.php' target='_blank' rel='noopener noreferrer'> click aqui</a>
    </h3>
  </div>
);
export default RetiroAfp;
