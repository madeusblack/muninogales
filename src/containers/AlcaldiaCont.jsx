import React from 'react';
import LateralMenu from '../components/LateralMenu';
import '../assets/styles/MunicipioLayout.scss';
import MunicipioHeader from '../components/municipalidad/MunicipioHeader';
import Alcaldia from '../components/municipalidad/Alcaldia';

const AlcaldiaCont = () => (
  <div className='MainMunicipio'>
    <MunicipioHeader />
    <LateralMenu />
    <Alcaldia />
  </div>
);
export default AlcaldiaCont;
