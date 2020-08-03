import React from 'react';
import Alcaldesa from '../assets/static/mosorio.jpg';
import '../assets/styles/Municipio/Alcaldesa.scss';

const Alcaldia = () => (
  <div>
    <div>
      <h1>ALCALDESA</h1>
    </div>
    <div>
      <h2>MARGARITA OSORIO PIZARRO</h2>
      <p>
        email: alcaldia@muninogales.cl
        fono: + 56 033 226 28 22
      </p>
    </div>
    <img src={Alcaldesa} alt='Alcaldesa' />
  </div>
);
export default Alcaldia;
