import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/LinksServicios.scss';

const LinksServicios = ({ tipo }) => {
  switch (tipo) {
    case 'muni':
      return (
        <div rel='noopener' target='_blank' id='dropdown' className='header__link dropdown'>
          <span className='services'>MUNICIPIO</span>
          <div className='dropdown-content'>
            <Link to='/vision'>VISIÓN Y MISIÓN</Link>
            <Link to='/alcaldia'>ALCALDESA</Link>
            <Link to='/consejales'>CONCEJO MUNICIPAL</Link>
            <Link to='/vision'>UNIDADES MUNICIPALES</Link>
            <Link to='/escalafon'>ORGANIGRAMA MUNICIPAL</Link>
            <Link to='/cuentapublica'>CUENTA PUBLICA</Link>
          </div>
        </div>
      );
    case 'comuna':
      return (
        <div rel='noopener' target='_blank' id='dropdown' className='header__link dropdown'>
          <span className='services'>COMUNA</span>
          <div className='dropdown-content'>
            <Link to='/historia'>HISTORIA</Link>
            <Link to='/poblacion'>POBLACIÓN</Link>
            <Link to='/turismo'>TURISMO</Link>
            <Link to='/fomentoproductivo'>FOMENTO PRODUCTIVO</Link>
          </div>
        </div>
      );
    case 'beneficios':
      return (
        <div rel='noopener' target='_blank' id='dropdown' className='header__link dropdown'>
          <span className='services'>BENEFICIOS</span>
          <div className='dropdown-content'>
            <Link to='/retiroafp'>RETIRO 10% AFP</Link>
            <a href='http://www.sii.cl/destacados/medidas_clasemedia/index.html' target='_blank' rel='noopener noreferrer'>BONO CLASE MEDIA</a>
            <Link to='/turismo'>BENEFICIOS SOCIALES MUNICIPALES</Link>
            <a href='http://www.registrosocial.gob.cl/beneficios-sociales' target='_blank' rel='noopener noreferrer'>BENEFICIOS SOCIALES ESTATALES</a>
          </div>
        </div>
      );
    default:
      return (
        <div rel='noopener' target='_blank' id='dropdown' className='header__link dropdown'>
          <span className='services'>SERVICIOS</span>
          <div className='dropdown-content'>
            <Link to='/'>EMPLEO Y EMPRENDIMIENTO</Link>
            <Link to='/'>LIBRETA DE CONTACTOS</Link>
            <Link to='/'>DIRECCION DE TRANSITO</Link>
            <Link to='/'>TRAMITES Y FORMULARIOS</Link>
          </div>
        </div>
      );
  }
};
export default LinksServicios;
