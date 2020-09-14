import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/LinksMenuMovil.scss';

const LinksMenuMovil = ({ tipo }) => {
  switch (tipo) {
    case 'muni':
      return (
        <div rel='noopener' target='_blank' id='dropdown' className='header__link dropdown'>
          <span className='mobileMenuLink'>MUNICIPIO</span>
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
          <span className='mobileMenuLink'>COMUNA</span>
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
          <span className='mobileMenuLink'>BENEFICIOS</span>
          <div className='dropdown-content'>
            <Link to='/retiroafp'>Retiro 10% AFP</Link>
            <a href='http://www.sii.cl/destacados/medidas_clasemedia/index.html' target='_blank' rel='noopener noreferrer'>Bono Clase Media</a>
            <a href='http://www.registrosocial.gob.cl/beneficios-sociales' target='_blank' rel='noopener noreferrer'>Beneficios Sociales Estatales</a>
          </div>
        </div>
      );
    default:
      return (
        <div rel='noopener' target='_blank' id='dropdown' className='header__link dropdown'>
          <span className='mobileMenuLink'>SERVICIOS</span>
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
export default LinksMenuMovil;
