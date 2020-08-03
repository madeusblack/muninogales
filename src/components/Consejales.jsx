import React from 'react';
import '../assets/styles/Consejales.scss';
import Jflores from '../assets/static/consejales/jflores.jpg';
import Ebueno from '../assets/static/consejales/ebueno.jpg';
import Jmarchant from '../assets/static/consejales/jmarchant.jpg';
import Rivera from '../assets/static/consejales/rivera.jpg';
import Gachon from '../assets/static/consejales/gachon.jpg';
import Lineros from '../assets/static/consejales/lineros.jpg';

const Consejales = () => {

  return (
    <div className='ConsejalesContainer'>
      <h1 className='ConsejalesTitulo'>Consejales</h1>
      <img className='imgConcejal' src={Jflores} alt='' />
      <img className='imgConcejal' src={Ebueno} alt='' />
      <img className='imgConcejal' src={Jmarchant} alt='' />
      <img className='imgConcejal' src={Rivera} alt='' />
      <img className='imgConcejal' src={Gachon} alt='' />
      <img className='imgConcejal' src={Lineros} alt='' />

    </div>
  );
};
export default Consejales;
