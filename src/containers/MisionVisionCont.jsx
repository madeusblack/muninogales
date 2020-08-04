import React from 'react';
import LateralMenu from '../components/LateralMenu';
import MisionVision from '../components/municipalidad/MisionVision';
import MunicipioHeader from '../components/municipalidad/MunicipioHeader';
import '../assets/styles/MunicipioLayout.scss';

const MisionVisionCont = () => (
  <div className='MainMunicipio'>
    <MunicipioHeader />
    <LateralMenu />
    <MisionVision />
  </div>
);
export default MisionVisionCont;
