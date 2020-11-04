import React from 'react';
import styles from '../../assets/styles/LayoutContenidoMuniComuna.module.css';
import turismo from '../../assets/static/comuna/turi1.jpg';

const Turismo = () => {
  const contenidoA = `
    El nombre de la comuna se remonta a sus orígenes como comuna.
    Había en el centro de la localidad unos árboles de nogal. De esta forma,
    la gente empezó a utilizar esos árboles como nombre de la localidad.
    La comuna de Nogales está formada por dos distritos: el Distrito de 
    Nogales (capital comunal) y el distrito de El Melón.

    El nombre de la comuna se remonta a sus orígenes como comuna.
    Había en el centro de la localidad unos árboles de nogal.
    De esta forma, la gente empezó a utilizar esos árboles como nombre de la localidad.
`;
  const contenidoB = `
`;
  return (
    <div className={styles.muniContainer}>
      <h1 className={styles.muniTitle}>TURISMO</h1>
      <img className={styles.imgMunicipalidad} src={turismo} alt='frontis de municipalidad' />
      <p className={styles.contenido}>{contenidoA}</p>
      <p className={styles.bottomParraph}>{contenidoB}</p>

    </div>
  );
};
export default Turismo;
