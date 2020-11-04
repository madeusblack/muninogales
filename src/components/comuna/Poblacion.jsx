/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styles from '../../assets/styles/LayoutContenidoMuniComuna.module.css';
import poblacion from '../../assets/static/comuna/pobl2.jpg';

const Poblacion = () => {
  const contenidoA = `
    Según los datos recolectados en el Censo del Instituto 
    Nacional de Estadísticas año 2002, la comuna posee una superficie de 405 km2 
    y una población de 21.633 habitantes, de los cuales son 10.847 mujeres y son 
    10.786 hombres.
    Nogales acoge al 1,40% de la población total de la región. Un 13,57% 
    (2.935 habitantes) corresponde a población rural y un 86,43% (18.698 habitantes)
    a población urbana.
    La localidad de El Melón es rica en yacimientos mineros de cobre y caliza.
    El cobre lo extrae la empresa Anglo American Chile con su división El Soldado,
    que le da nombre a la mina de tajo cerrado. En cambio, el yacimiento de caliza
    es extraído por la empresa Cemento Melón, que lleva el material a la ciudad de
    La Calera, donde es procesada y comercializada, por medio de un tren de carga.
    Dicho tren recibe tradicionalmente el nombre de "Calero". Otro recurso es la
    agricultura, la comuna tiene fértiles tierras donde se cosechan muchos productos.`;
  const classTable = `${styles.bottomParraph} ${styles.tablaCenso}`;

  return (
    <div className={styles.muniContainer}>
      <h1 className={styles.muniTitle}>POBLACIÓN</h1>
      <img className={styles.imgMunicipalidad} src={poblacion} alt='frontis de municipalidad' />
      <p>{contenidoA}</p>
      <table className={classTable}>
        <tr>
          <th id={styles.enBlanco} />
          <th>CENSO 1992</th>
          <th>CENSO 2002</th>
          <th>CENSO 2012 (PROYECTADA)</th>
        </tr>
        <tr>
          <td className={styles.inicial}>TOTAL COMUNA NOGALES</td>
          <td>18.669</td>
          <td>21.633</td>
          <td>26.385</td>
        </tr>
        <tr>
          <td className={styles.inicial}>MUJERES</td>
          <td>9.341</td>
          <td>10.847</td>
          <td>13.291</td>
        </tr>
        <tr>
          <td className={styles.inicial}>HOMBRES</td>
          <td>9.328</td>
          <td>10.786</td>
          <td>13.094</td>
        </tr>
      </table>
      <h6>Fuente: Reportes Estadísticos Comunales INE</h6>
    </div>
  );
};
export default Poblacion;
