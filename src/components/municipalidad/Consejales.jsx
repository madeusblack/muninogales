import React from 'react';
import '../../assets/styles/Consejales.scss';
import styles from '../../assets/styles/LayoutContenidoMuniComuna.module.css';
import Jflores from '../../assets/static/consejales/jflores.jpg';
import Ebueno from '../../assets/static/consejales/ebueno.jpg';
import Jmarchant from '../../assets/static/consejales/jmarchant.jpg';
import Rivera from '../../assets/static/consejales/rivera.jpg';
import Gachon from '../../assets/static/consejales/gachon.jpg';
import Lineros from '../../assets/static/consejales/lineros.jpg';

const Consejales = () => {
  return (
    <div className={styles.ConsejalesContainer}>
      <h1 className={styles.muniTitle}>CONCEJALES</h1>
      <div className={styles.grupoConsejales}>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={Jflores} alt='' />
          <p>JUAN FLORES OLIVARES</p>
        </div>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={Ebueno} alt='' />
          <p>EDUARDO BUENO NAVARRO</p>
        </div>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={Jmarchant} alt='' />
          <p>JOHAO MARCHANT VALENZUELA</p>
        </div>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={Rivera} alt='' />
          <p>JUAN RIVERA ROJAS</p>
        </div>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={Gachon} alt='' />
          <p>FERDINAND GACHÓN JEREZ</p>
        </div>
        <div className={styles.contenedorConcejal}>
          <img className={styles.imgConcejal} src={Lineros} alt='' />
          <p>JAIME LINEROS DÍAZ</p>
        </div>
      </div>

    </div>
  );
};
export default Consejales;
