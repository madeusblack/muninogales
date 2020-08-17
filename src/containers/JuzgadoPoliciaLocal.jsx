import React from 'react';
import '../assets/styles/JuzgadoPoliciaLocal.scss';
import JuzgadoCuerpo from '../components/departamentos/JuzgadoCuerpo';
import JuzgadoSide from '../components/departamentos/JuzgadoSide';

const JuzgadoPoliciaLocal = () => (
  <div className='mainJuzgado'>
    <JuzgadoSide />
    <JuzgadoCuerpo />
  </div>

);
export default JuzgadoPoliciaLocal;
