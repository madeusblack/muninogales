import React from 'react';
import LateralMenu from '../components/LateralMenu';
import '../assets/styles/MunicipioLayout.scss';
import MunicipioHeader from '../components/MunicipioHeader';
import Alcaldia from '../components/Alcaldia';

const AlcaldiaCont = () => (
  <div className='MainMunicipio'>
    <MunicipioHeader />
    <LateralMenu />
    <Alcaldia />
  </div>
);
export default AlcaldiaCont;
