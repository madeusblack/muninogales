import React from 'react';
import '../../assets/styles/LayoutContenidoMuniComuna.scss';
import muni from '../../assets/static/municipalidad/municipalidad.jpg';

const MisionVision = () => {
  const contenido = `La Municipalidad de Nogales busca entregar 
  a sus vecinos las oportunidades y garantías de vivir en una 
  comuna siempre atenta a sus necesidades, realizando proyectos 
  que permitan un mejor desarrollo de la calidad de vida y el territorio,
   así como en las diversas áreas del quehacer comunal.`;
  return (
    <div className='muniContainer'>
      <h1 className='muniTitle'>VISIÓN Y MISIÓN</h1>
      <img className='imgMunicipalidad' src={muni} alt='frontis de municipalidad' />
      <p>{contenido}</p>

    </div>
  );
};
export default MisionVision;
