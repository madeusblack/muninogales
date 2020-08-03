import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LateralMenu.scss';

const LateralMenu = () => {
  return (
    <div className='lateralMenu'>
      <Link to='/vision'>Visión y Misión</Link>
      <Link to='/alcaldia'>Alcaldesa</Link>

    </div>
  );
};

export default LateralMenu;
