/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styles from '../assets/styles/Footer.module.css';
import phone from '../assets/static/footer/phone.svg';

const Footer = () => {
  const secondaryClass=`${styles.footerMunicipalidad} ${styles.secondary}`;
  return(
    <div className={styles.footer}>
      <div className={styles.footerMunicipalidad}>
        <h4>MUNICIPALIDAD DE NOGALES</h4>
        <p>DIRECCIÓN:
          <a className={styles.highlighted} href='https://www.google.com/maps/place/Pedro+Felix+Vicu%C3%B1a+199,+Nogales,+Valpara%C3%ADso/data=!4m2!3m1!1s0x9689cac8fdefdc5b:0xdd83d807f7488275?sa=X&ved=2ahUKEwj30sHSr8HqAhVJErkGHehGDl4Q8gEwAHoECAsQAQ'> PEDRO FELIX VICUÑA 199</a>
        </p>
        <div className={styles.phoneContainer}>
          <img className={styles.phoneImage} loading='lazy' src={phone} alt='telefonos' />
          <div className={styles.phoneNumbers}>
            <a className={styles.phone} href='tel:332262019'>33 2 262 019</a>
            <a className={styles.phone} href='tel:332262811'>33 2 262 811</a>
            <a className={styles.phone} href='tel:332262822'>33 2 262 822</a>
            <a className={styles.phone} href='tel:332262966'>33 2 262 966</a>
          </div>
        </div>
      </div>
      <div>
        <p>CONTÁCTENOS</p>
        <a className={styles.highlighted} href='mailto:alcaldia@muninogales.cl'>alcaldia@muninogales.cl</a>
      </div>
      <div className={secondaryClass}>
        <h4>DIRECCIÓN DE DESARROLLO COMUNITARIO</h4>
        <p>DIRECCIÓN:
          <a className={styles.highlighted} target='blank' href='https://www.google.com/maps/place/Dideco+Nogales/@-32.7359484,-71.2006857,19z/data=!3m1!4b1!4m5!3m4!1s0x9689cb7c4e2576bb:0xd7821611f63ac568!8m2!3d-32.7359495!4d-71.2001385'> SIMÓN BOLIVAR 12</a>
        </p>
        <div className={styles.phoneContainer}>
          <img className={styles.phoneImage} src={phone} loading='lazy' alt='telefonos' />
          <div className={styles.phoneNumbers}>
            <a className={styles.phone} href='tel:332262770'>33 2 262 770</a>
            <a className={styles.phone} href='tel:332263679'>33 2 263 679</a>
          </div>
        </div>
      </div>
      <div>
        <p>CONTÁCTENOS</p>
        <a className={styles.highlighted} href='mailto:dideco@muninogales.cl'>dideco@muninogales.cl</a>
      </div>
      <div className={secondaryClass}>
        <h4>CENTRO CÍVICO EL MELÓN</h4>
        <p>DIRECCIÓN:
          <a className={styles.highlighted} target='blank' href="https://www.google.cl/maps/place/32%C2%B041'25.6%22S+71%C2%B012'43.8%22W/@-32.6904307,-71.2132663,18z/data=!3m1!4b1!4m9!1m2!2m1!1sCENTRO+CIVICO+EL+MELON!3m5!1s0x0:0x0!7e2!8m2!3d-32.6904334!4d-71.2121716"> RAMÓN FREIRE 3</a>
        </p>
        <div className={styles.phoneContainer}>
          <img className={styles.phoneImage} src={phone} alt='telefonos' loading='lazy' />
          <div className={styles.phoneNumbers}>
            <a className={styles.phone} href='tel:332280586'>33 2 280 586</a>
            <a className={styles.phone} href='tel:332280339'>33 2 280 339</a>
          </div>
        </div>
      </div>
      <div>
        <p>CONTÁCTENOS</p>
        <a className={styles.highlighted} target='blank' href='mailto:centrocivico@muninogales.cl'>centrocivico@muninogales.cl</a>
      </div>
      <div className={secondaryClass}>
        <h4>AGUA POTABLE RURAL EL MELÓN</h4>
        <p>DIRECCIÓN:
          <a className={styles.highlighted} target='blank' href="https://www.google.com/maps/place/32%C2%B041'30.5%22S+71%C2%B012'43.3%22W/@-32.6918129,-71.2125722,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d-32.6918137!4d-71.2120248"> RAMÓN FREIRE 43</a>
        </p>
        <div className={styles.phoneContainer}>
          <img className={styles.phoneImage} src={phone} alt='telefonos' loading='lazy' />
          <div className={styles.phoneNumbers}>
            <a className={styles.phone} href='tel:332280006'>33 2 280 006</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
