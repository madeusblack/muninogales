import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/LinksServicios.module.css';

const LinksServicios = ({ tipo }) => {
  switch (tipo) {
    case 'muni':
      return (
        <div className={styles.dropdown}>
          <span className={styles.services}>MUNICIPIO</span>
          <div className={styles.dropdownContent}>
            <Link className={styles.dropdownLink} to='/vision'>VISIÓN Y MISIÓN</Link>
            <Link className={styles.dropdownLink} to='/alcaldia'>ALCALDESA</Link>
            <Link className={styles.dropdownLink} to='/consejales'>CONCEJO MUNICIPAL</Link>
            <Link className={styles.dropdownLink} to='/vision'>UNIDADES MUNICIPALES</Link>
            <Link className={styles.dropdownLink} to='/escalafon'>ORGANIGRAMA MUNICIPAL</Link>
            <Link className={styles.dropdownLink} to='/cuentapublica'>CUENTA PUBLICA</Link>
          </div>
        </div>
      );
    case 'comuna':
      return (
        <div className={styles.dropdown}>
          <span className={styles.services}>COMUNA</span>
          <div className={styles.dropdownContent}>
            <Link className={styles.dropdownLink} to='/historia'>HISTORIA</Link>
            <Link className={styles.dropdownLink} to='/poblacion'>POBLACIÓN</Link>
            <Link className={styles.dropdownLink} to='/turismo'>TURISMO</Link>
            <Link className={styles.dropdownLink} to='/fomentoproductivo'>FOMENTO PRODUCTIVO</Link>
          </div>
        </div>
      );
    case 'beneficios':
      return (
        <div className={styles.dropdown}>
          <span className={styles.services}>BENEFICIOS</span>
          <div className={styles.dropdownContent}>
            <Link className={styles.dropdownLink} to='/retiroafp'>RETIRO 10% AFP</Link>
            <a className={styles.dropdownLink} href='http://www.sii.cl/destacados/medidas_clasemedia/index.html' target='_blank' rel='noopener noreferrer'>BONO CLASE MEDIA</a>
            <a className={styles.dropdownLink} href='http://www.registrosocial.gob.cl/beneficios-sociales' target='_blank' rel='noopener noreferrer'>BENEFICIOS SOCIALES ESTATALES</a>
          </div>
        </div>
      );
    default:
      return (
        <div className={styles.dropdown}>
          <span className={styles.services}>SERVICIOS</span>
          <div className={styles.dropdownContent}>
            <Link className={styles.dropdownLink} to='/'>EMPLEO Y EMPRENDIMIENTO</Link>
            <Link className={styles.dropdownLink} to='/'>LIBRETA DE CONTACTOS</Link>
            <Link className={styles.dropdownLink} to='/'>DIRECCION DE TRANSITO</Link>
            <Link className={styles.dropdownLink} to='/'>TRAMITES Y FORMULARIOS</Link>
          </div>
        </div>
      );
  }
};
export default LinksServicios;
