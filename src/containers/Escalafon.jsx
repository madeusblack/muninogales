import React from 'react';
import LateralMenu from '../components/LateralMenu';
import '../assets/styles/MunicipioLayout.scss';
import MunicipioHeader from '../components/municipalidad/MunicipioHeader';
import EscalafonBody from '../components/municipalidad/EscalafonBody';

const Escalafon = () => (
  <div className='MainMunicipio'>
    <MunicipioHeader />
    <LateralMenu />
    <EscalafonBody />
  </div>
);
export default Escalafon;
