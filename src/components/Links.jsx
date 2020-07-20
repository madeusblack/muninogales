import React from 'react';
import '../assets/styles/Links.scss';
import permisos from '../assets/static/links/permisos.png';
import sinpapeleo from '../assets/static/links/sinpapeleo.png';
import valida from '../assets/static/links/valida.png';
import omil from '../assets/static/links/omil.png';
import jefasdehogar from '../assets/static/links/jefasdehogar.png';
import chileatiende from '../assets/static/links/chileatiende.png';
import concursos from '../assets/static/links/concursos.png';
import cuentapublica from '../assets/static/links/cuentapublica.jpg';

const Links = () => (
  <div className='linksContainer'>
    <h3 className='links'>Enlaces</h3>
    <img src={permisos} className='linkImage' alt='' />
    <img src={cuentapublica} className='linkImage' alt='' id='cuenta' />
    <img src={valida} className='linkImage' alt='' />
    <img src={concursos} className='linkImage' alt='' />
    <img src={omil} className='linkImage' alt='' />
    <img src={sinpapeleo} className='linkImage' alt='' />
    <img src={jefasdehogar} className='linkImage' alt='' />
    <img src={chileatiende} className='linkImage' alt='' />
  </div>
);
export default Links;
