import React from 'react';
import muni from '../assets/static/municipalidad/municipalidad.jpg';

const MisionVision = () => {
  const contenido = `La Municipalidad de Nogales busca entregar 
  a sus vecinos las oportunidades y garantías de vivir en una 
  comuna siempre atenta a sus necesidades, realizando proyectos 
  que permitan un mejor desarrollo de la calidad de vida y el territorio,
   así como en las diversas áreas del quehacer comunal.`;
  return (
    <>
      <h1>VISIÓN Y MISIÓN</h1>
      <p>{contenido}</p>
      <img src={muni} alt='frontis de municipalidad' />
    </>
  );
};
export default MisionVision;
