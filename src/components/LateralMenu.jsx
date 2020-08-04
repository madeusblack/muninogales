/* eslint-disable no-else-return */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LateralMenu.scss';

const LateralMenu = (props) => {
  const { comuna } = props;

  console.log(comuna);
  if (comuna === 'true') {
    return (
      <div className='lateralMenu'>
        <Link to='/historia'>HISTORIA</Link>
        <Link to='/poblacion'>POBLACIÓN</Link>
        <Link to='/turismo'>TURISMO</Link>
        <Link to='/fomentoproductivo'>FOMENTO PRODUCTIVO</Link>
      </div>
    );
  } else {
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
};
export default LateralMenu;
