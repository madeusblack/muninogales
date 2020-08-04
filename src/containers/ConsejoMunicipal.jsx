import React from 'react';
import LateralMenu from '../components/LateralMenu';
import MunicipioHeader from '../components/municipalidad/MunicipioHeader';
import '../assets/styles/MunicipioLayout.scss';
import Consejales from '../components/municipalidad/Consejales';

const ConsejoMunicipal = () => (
  <div className='MainMunicipio'>
    <MunicipioHeader />
    <LateralMenu />
    <Consejales />

  </div>
);
export default ConsejoMunicipal;
