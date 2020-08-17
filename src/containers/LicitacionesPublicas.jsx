import React from 'react';
import '../assets/styles/LayoutDestacados.scss';
import ficha from '../assets/static/destacados/ver.png';

const LicitacionesPublicas = () => {
  return (
    <div className='seccionDestacadaContainer'>
      <h2>LICITACIONES PÚBLICAS</h2>
      <h3 className='subTitleDestacados'>LICITACIONES</h3>
      <div className='containerLinksDestacados'>
        <table>
          <thead>
            <tr className='headerTablaDestacados'>
              <th>ID</th>
              <th>DENOMINACIÓN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className='verficha' src={ficha} alt='ver Ficha' />
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};
export default LicitacionesPublicas;
