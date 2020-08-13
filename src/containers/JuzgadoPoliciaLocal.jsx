import React from 'react';
import '../assets/styles/JuzgadoPoliciaLocal.scss';
import JuzgadoCuerpo from '../components/JuzgadoCuerpo';
import JuzgadoSide from '../components/JuzgadoSide';

const JuzgadoPoliciaLocal = () => (
  <div className='mainJuzgado'>
    <JuzgadoSide />
    <JuzgadoCuerpo />
  </div>

);
export default JuzgadoPoliciaLocal;
