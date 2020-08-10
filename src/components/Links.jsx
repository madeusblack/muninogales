import React from 'react';
import '../assets/styles/Links.scss';
import { Link } from 'react-router-dom';

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
    <a target='_blank' rel='noopener noreferrer' href='https://www.sem.gob.cl/pago/buscar.php?pago_id=32&inst_id=13462850&setiframe=0'>
      <img src={permisos} className='linkImage' alt='' />
    </a>
    <a target='_blank' rel='noopener noreferrer' id='cuenta' href='http://www.muninogales.cl/transp/cpp18.html'>
      <img src={cuentapublica} className='linkImage' alt='' id='cuenta' />
    </a>

    <a target='_blank' rel='noopener noreferrer' href='https://www.sem.gob.cl/pago/validacion/'>
      <img src={valida} className='linkImage' alt='' />
    </a>
    <a target='_blank' rel='noopener noreferrer' href='http://www.directoresparachile.cl/'>
      <img src={concursos} className='linkImage' alt='' />
    </a>
    <a target='_blank' rel='noopener noreferrer' href='https://www.bne.cl/listado-omil'>
      <img src={omil} className='linkImage' alt='' />
    </a>
    <a target='_blank' rel='noopener noreferrer' href='https://muninogales.chilesinpapeleo.cl/tramites/disponibles'>
      <img src={sinpapeleo} className='linkImage' alt='' />
    </a>
    <Link to='/pmujer'>
      <img src={jefasdehogar} className='linkImage' alt='' />
    </Link>
    <a target='_blank' rel='noopener noreferrer' href='http://www.chileatiende.cl/'>
      <img src={chileatiende} className='linkImage' alt='' />
    </a>

  </div>
);
export default Links;
