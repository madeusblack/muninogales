import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LinksServicios.scss';

const LinksServicios = () => (
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
export default LinksServicios;
