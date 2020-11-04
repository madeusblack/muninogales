import React from 'react';
import styles from '../assets/styles/JuzgadoPoliciaLocal.module.css';
import JuzgadoCuerpo from '../components/departamentos/JuzgadoCuerpo';
import JuzgadoSide from '../components/departamentos/JuzgadoSide';

const JuzgadoPoliciaLocal = () => (
  <div className={styles.mainJuzgado}>
    <JuzgadoSide />
    <JuzgadoCuerpo />
  </div>

);
export default JuzgadoPoliciaLocal;
