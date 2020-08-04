import React from 'react';
import LateralMenu from '../components/LateralMenu';
import '../assets/styles/MunicipioLayout.scss';
import ComunaHeader from '../components/ComunaHeader';
import Turismo from '../components/Turismo';

const TurismoContainer = () => (
  <div className='MainMunicipio'>
    <ComunaHeader />
    <LateralMenu comuna='true' />
    <Turismo />
  </div>
);
export default TurismoContainer;
