import React from 'react';
import LateralMenu from '../components/LateralMenu';
import '../assets/styles/MunicipioLayout.scss';
import ComunaHeader from '../components/ComunaHeader';
import Poblacion from '../components/Poblacion';

const PoblacionContainer = () => (
  <div className='MainMunicipio'>
    <ComunaHeader />
    <LateralMenu comuna='true' />
    <Poblacion />
  </div>
);
export default PoblacionContainer;
