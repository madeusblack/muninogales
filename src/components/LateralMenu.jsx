import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LateralMenu.scss';

const LateralMenu = () => {
  return (
    <div className='lateralMenu'>
      <Link to='/vision'>Visión y Misión</Link>
      <Link to='/alcaldia'>Alcaldesa</Link>
      <Link to='/consejales'>Consejo Municipal</Link>
      <Link to='/vision'>Unidades Municipales</Link>
      <Link to='/escalafon'>Escalafón Municipal</Link>
      <Link to='/cuentapublica'>Cuenta Publica</Link>
    </div>
  );
};

export default LateralMenu;
