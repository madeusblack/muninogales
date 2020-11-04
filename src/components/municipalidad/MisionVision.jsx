import React from 'react';
import styles from '../../assets/styles/LayoutContenidoMuniComuna.module.css';
import muni from '../../assets/static/municipalidad/municipalidad.jpg';

const MisionVision = () => {
  const contenido = `La Municipalidad de Nogales busca entregar 
  a sus vecinos las oportunidades y garantías de vivir en una 
  comuna siempre atenta a sus necesidades, realizando proyectos 
  que permitan un mejor desarrollo de la calidad de vida y el territorio,
   así como en las diversas áreas del quehacer comunal.`;
  return (
    <div className={styles.muniContainer}>
      <h1 className={styles.muniTitle}>VISIÓN Y MISIÓN</h1>
      <img className={styles.imgMunicipalidad} src={muni} alt='frontis de municipalidad' />
      <h3>{contenido}</h3>

    </div>
  );
};
export default MisionVision;
