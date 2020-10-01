import React from 'react';
import '../../assets/styles/Highlighted.scss';
import residuos from '../../assets/static/informaciones/residuos.jpg';
import residuoswebp from '../../assets/static/informaciones/residuos.webp';

const Informaciones = () => (
  <div className='informacionesContainer'>
    <h3 className='highlightedTitle'>Informaciones</h3>
    <picture>
      <source srcSet={residuoswebp} type='image/webp' />
      <source srcSet={residuos} type='image/jpeg' />
      <img className='highlightedImage' loading='lazy' csr={residuos} alt='' />
    </picture>
  </div>
);
export default Informaciones;
