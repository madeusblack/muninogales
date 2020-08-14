import React from 'react';
import '../assets/styles/Highlighted.scss';
import residuos from '../assets/static/informaciones/residuos.jpg';

const Informaciones = () => (
  <div className='informacionesContainer'>
    <h3 className='highlightedTitle'>Informaciones</h3>
    <img src={residuos} alt='' className='highlightedImage' />
  </div>
);
export default Informaciones;
