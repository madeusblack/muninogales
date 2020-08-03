import React from 'react';
import LateralMenu from '../components/LateralMenu';
import '../assets/styles/MunicipioLayout.scss';
import MunicipioHeader from '../components/MunicipioHeader';
import EscalafonBody from '../components/EscalafonBody';

const Escalafon = () => (
  <div className='MainMunicipio'>
    <MunicipioHeader />
    <LateralMenu />
    <EscalafonBody />
  </div>
);
export default Escalafon;
