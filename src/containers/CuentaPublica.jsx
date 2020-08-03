import React from 'react';
import LateralMenu from '../components/LateralMenu';
import '../assets/styles/MunicipioLayout.scss';
import MunicipioHeader from '../components/MunicipioHeader';
import CuentaPublicaBody from '../components/CuentaPublicaBody';

const CuentaPublica = () => (
  <div className='MainMunicipio'>
    <MunicipioHeader />
    <LateralMenu />
    <CuentaPublicaBody />
  </div>
);
export default CuentaPublica;
