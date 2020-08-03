import React from 'react';
import LateralMenu from '../components/LateralMenu';
import MisionVision from '../components/MisionVision';
import MunicipioHeader from '../components/MunicipioHeader';
import '../assets/styles/MunicipioLayout.scss';

const MisionVisionCont = () => (
  <div className='MainMunicipio'>
    <MunicipioHeader />
    <LateralMenu />
    <MisionVision />
  </div>
);
export default MisionVisionCont;
