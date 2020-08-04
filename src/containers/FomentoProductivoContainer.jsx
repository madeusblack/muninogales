import React from 'react';
import LateralMenu from '../components/LateralMenu';
import '../assets/styles/MunicipioLayout.scss';
import ComunaHeader from '../components/ComunaHeader';
import FomentoProductivo from '../components/FomentoProductivo';

const FomentoProductivoContainer = () => (
  <div className='MainMunicipio'>
    <ComunaHeader />
    <LateralMenu comuna='true' />
    <FomentoProductivo />
  </div>
);
export default FomentoProductivoContainer;
