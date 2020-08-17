import React from 'react';
import '../../assets/styles/LayoutContenidoMuniComuna.scss';
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
    <div className='muniContainer'>
      <h1 className='muniTitle'>TURISMO</h1>
      <img className='imgMunicipalidad' src={turismo} alt='frontis de municipalidad' />
      <p>{contenidoA}</p>
      <p className='bottomParraph'>{contenidoB}</p>

    </div>
  );
};
export default Turismo;
