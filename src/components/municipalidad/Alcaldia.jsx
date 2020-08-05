import React from 'react';
import Alcaldesa from '../../assets/static/mosorio.jpg';
import '../../assets/styles/LayoutContenidoMuniComuna.scss';

const Alcaldia = () => (
  <div className='muniContainer'>
    <div>
      <h1 className='muniTitle'>ALCALDESA</h1>
    </div>
    <img className='imgMunicipalidad alcaldesa' src={Alcaldesa} alt='Alcaldesa' />

    <div className='containerAlcaldesa'>
      <h2>MARGARITA OSORIO PIZARRO</h2>
      <p>
        EMAIL:
        <a href='mailto:alcaldia@muninogales.cl'> alcaldia@muninogales.cl </a>
        <br />
        <br />
        TELEFONO:
        <a href='tel:+56332262822'>+ 56 33 226 28 22 </a>
      </p>
    </div>
    <div className='bottomParraph'>
      <h3>Trayectoria</h3>
      <p>2016-2020    1º PERÍODO COMO ALCALDESA DE LA MUNICIPALIDAD DE NOGALES</p>
    </div>

  </div>
);
export default Alcaldia;
