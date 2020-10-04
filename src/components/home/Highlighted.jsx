import React from 'react';
import '../../assets/styles/Highlighted.scss';
import { Link } from 'react-router-dom';
import youtube from '../../assets/static/highlighted/youtube.png';
import sii from '../../assets/static/highlighted/sii.png';
import concursos from '../../assets/static/highlighted/concurso.png';
import licitaciones from '../../assets/static/highlighted/licitacion.png';
import organicaciones from '../../assets/static/highlighted/organicaciones.png';

const Highlighted = () => (
  <div className='highlightedContainer'>
    <h3 className='highlightedTitle'>Destacados</h3>
    <a target='_blank' rel='noopener noreferrer' aria-label='canal de youtube municipalidad de nogales' href='https://www.youtube.com/channel/UCpURFVn_rEYNePMMhw_-fWw'>
      <img src={youtube} alt='' className='highlightedImage' />
    </a>
    <Link to='/sii'>
      <img src={sii} alt='' className='highlightedImage' aria-label='reavaluo bienes agricolas reavaluo sitios no edificados propiedades abandonadas o pozos lastreros' />
    </Link>
    <Link to='/concursospublicos' aria-label='concursos publicos'>
      <img src={concursos} alt='' className='highlightedImage' />
    </Link>
    <Link to='/licitaciones' aria-label='licitaciones'>
      <img src={licitaciones} alt='' className='highlightedImage' />
    </Link>
    <Link to='/organizaciones' aria-label='organizaciones'>
      <img src={organicaciones} alt='' className='highlightedImage' />
    </Link>

  </div>
);
export default Highlighted;
