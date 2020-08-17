import React from 'react';
import '../assets/styles/LayoutDestacados.scss';
import jefeuap from '../assets/static/destacados/jefeuap.pdf';
import pdfImg from '../assets/static/PDF.svg';

const ConcursosPublicos = () => {
  return (
    <div className='seccionDestacadaContainer'>
      <h2>CONCURSOS PÚBLICOS</h2>
      <h3 className='subTitleDestacados'>LLAMADOS A CONCURSOS</h3>

      <div className='containerLinksDestacados'>
        <table>
          <thead>
            <tr className='headerTablaDestacados'>
              <th>Bases</th>
              <th>DENOMINACIÓN CARGO</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href={jefeuap}>
                  <img className='imgTable' src={pdfImg} alt='' />
                </a>
              </td>
              <td>2° CONCURSO PÚBLICO, Jefatura Unidad de Agua Potable, Planta Grado 11</td>
              <td>RUT seleccionado es 8.362.842-1</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};
export default ConcursosPublicos;
