import React from 'react';
import '../assets/styles/Highlighted.scss';
import youtube from '../assets/static/highlighted/youtube.png';
import sii from '../assets/static/highlighted/sii.png';
import concursos from '../assets/static/highlighted/concurso.png';
import licitaciones from '../assets/static/highlighted/licitacion.png';
import organicaciones from '../assets/static/highlighted/organicaciones.png';

const Highlighted = () => (
  <div className='highlightedContainer'>
    <h3 className='highlightedTitle'>Destacados</h3>
    <img src={youtube} alt='' className='highlightedImage' />
    <img src={sii} alt='' className='highlightedImage' />
    <img src={concursos} alt='' className='highlightedImage' />
    <img src={licitaciones} alt='' className='highlightedImage' />
    <img src={organicaciones} alt='' className='highlightedImage' />
  </div>
);
export default Highlighted;
