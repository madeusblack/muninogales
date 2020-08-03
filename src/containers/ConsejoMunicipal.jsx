import React from 'react';
import LateralMenu from '../components/LateralMenu';
import MunicipioHeader from '../components/MunicipioHeader';
import '../assets/styles/MunicipioLayout.scss';
import Consejales from '../components/Consejales';

const ConsejoMunicipal = () => (
  <div className='MainMunicipio'>
    <MunicipioHeader />
    <LateralMenu />
    <Consejales />

  </div>
);
export default ConsejoMunicipal;