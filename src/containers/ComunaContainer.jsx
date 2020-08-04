import React from 'react';
import LateralMenu from '../components/LateralMenu';
import '../assets/styles/MunicipioLayout.scss';
import ComunaHeader from '../components/ComunaHeader';
import Historia from './Historia';

const ComunaContainer = () => {

  return (
    <div className='MainMunicipio'>
      <ComunaHeader />
      <LateralMenu comuna='true' />
      <Historia />
    </div>
  );
}
export default ComunaContainer;
