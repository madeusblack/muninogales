import React from 'react';
import '../../assets/styles/Links.scss';
import { Link } from 'react-router-dom';
import permisos from '../../assets/static/links/permisos.png';
import permisoswebp from '../../assets/static/links/permisos.webp';
import sinpapeleo from '../../assets/static/links/sinpapeleo.png';
import sinpapeleowebp from '../../assets/static/links/sinpapeleo.webp';
import valida from '../../assets/static/links/valida.png';
import validawebp from '../../assets/static/links/valida.webp';
import omil from '../../assets/static/links/omil.png';
import omilwebp from '../../assets/static/links/omil.webp';
import jefasdehogar from '../../assets/static/links/jefasdehogar.png';
import jefasdehogarwebp from '../../assets/static/links/jefasdehogar.webp';
import chileatiende from '../../assets/static/links/chileatiende.png';
import chileatiendewebp from '../../assets/static/links/chileatiende.webp';
import concursos from '../../assets/static/links/concursos.png';
import cuentapublica from '../../assets/static/links/cuentapublica.jpg';
import cuentapublicawebp from '../../assets/static/links/cuentapublica.webp';
import participacion from '../../assets/static/links/ine.png';
import participacionwebp from '../../assets/static/links/ine.webp';
import plebiscito from '../../assets/static/links/plebiscito.jpg';
import plebiscitowebp from '../../assets/static/links/plebiscito.webp';

const Links = () => (
  <div className='linksContainer'>
    <h3 className='linksTitle'>Enlaces</h3>
    <a target='_blank' aria-label='Pago permisos de circulacion' rel='noopener noreferrer' href='https://www.sem.gob.cl/pago/buscar.php?pago_id=32&inst_id=13462850&setiframe=0'>
      <picture>
        <source srcSet={permisoswebp} type='image/webp' />
        <source srcSet={permisos} type='image/png' />
        <img className='linkImage' csr={permisos} loading='lazy' alt='' />
      </picture>
    </a>
    <Link id='cuenta' to='/cuentapublica' aria-label='cuenta publica'>
      <picture>
        <source srcSet={cuentapublicawebp} type='image/webp' />
        <source srcSet={cuentapublica} type='image/jpg' />
        <img className='linkImage' csr={cuentapublica} loading='lazy' alt='' />
      </picture>
    </Link>

    <a target='_blank' aria-label='validar documentos' rel='noopener noreferrer' href='https://www.sem.gob.cl/pago/validacion/'>
      <picture>
        <source srcSet={validawebp} type='image/webp' />
        <source srcSet={valida} type='image/png' />
        <img className='linkImage' csr={valida} loading='lazy' alt='' />
      </picture>
    </a>
    <a target='_blank' rel='noopener noreferrer' aria-label='programa directores para chile' href='http://www.directoresparachile.cl/'>
      <img src={concursos} loading='lazy' className='linkImage' alt='' />
    </a>
    <a target='_blank' rel='noopener noreferrer' aria-label='omil' href='https://www.bne.cl/listado-omil'>
      <picture>
        <source srcSet={omilwebp} type='image/webp' />
        <source srcSet={omil} type='image/png' />
        <img className='linkImage' csr={omil} loading='lazy' alt='' />
      </picture>
    </a>
    <a target='_blank' rel='noopener noreferrer' aria-label='chile sin papeleo, tramites en linea' href='https://muninogales.chilesinpapeleo.cl/tramites/disponibles'>
      <picture>
        <source srcSet={sinpapeleowebp} type='image/webp' />
        <source srcSet={sinpapeleo} type='image/png' />
        <img className='linkImage' csr={sinpapeleo} loading='lazy' alt='' />
      </picture>
    </a>
    <Link to='/pmujer' aria-label='programa jefas de hogar'>
      <picture>
        <source srcSet={jefasdehogarwebp} type='image/webp' />
        <source srcSet={jefasdehogar} type='image/png' />
        <img className='linkImage' csr={jefasdehogar} loading='lazy' alt='' />
      </picture>
    </Link>
    <a target='_blank' rel='noopener noreferrer' aria-label='chileatiende' href='http://www.chileatiende.cl/'>
      <picture>
        <source srcSet={chileatiendewebp} type='image/webp' />
        <source srcSet={chileatiende} type='image/png' />
        <img className='linkImage' csr={chileatiende} loading='lazy' alt='' />
      </picture>
    </a>
    <a target='_blank' rel='noopener noreferrer' id='ine' aria-label='plebiscito nacional 2020' href='https://www.plebiscitonacional2020.cl/'>
      <picture>
        <source srcSet={plebiscitowebp} type='image/webp' />
        <source srcSet={plebiscito} type='image/png' />
        <img className='linkImage' csr={plebiscito} loading='lazy' alt='' />
      </picture>
    </a>
    <a target='_blank' rel='noopener noreferrer' id='plebiscito' aria-label='censo de participacion intercultural instituto nacional de estadisticas' href='https://www.ine.cl/participacionintercultural'>
      <picture>
        <source srcSet={participacionwebp} type='image/webp' />
        <source srcSet={participacion} type='image/png' />
        <img className='linkImage' csr={participacion} loading='lazy' alt='' />
      </picture>
    </a>
  </div>
);
export default Links;
