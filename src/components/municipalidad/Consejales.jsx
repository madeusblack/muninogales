import React from 'react';
import '../../assets/styles/Consejales.scss';
import '../../assets/styles/LayoutContenidoMuniComuna.scss';
import Jflores from '../../assets/static/consejales/jflores.jpg';
import Ebueno from '../../assets/static/consejales/ebueno.jpg';
import Jmarchant from '../../assets/static/consejales/jmarchant.jpg';
import Rivera from '../../assets/static/consejales/rivera.jpg';
import Gachon from '../../assets/static/consejales/gachon.jpg';
import Lineros from '../../assets/static/consejales/lineros.jpg';

const Consejales = () => {
  return (
    <div className='ConsejalesContainer'>
      <h1 className='muniTitle'>CONCEJALES</h1>
      <div className='grupoConsejales'>
        <div className='contenedorConcejal'>
          <img className='imgConcejal' src={Jflores} alt='' />
          <p>JUAN FLORES OLIVARES</p>
        </div>
        <div className='contenedorConcejal'>
          <img className='imgConcejal' src={Ebueno} alt='' />
          <p>EDUARDO BUENO NAVARRO</p>
        </div>
        <div className='contenedorConcejal'>
          <img className='imgConcejal' src={Jmarchant} alt='' />
          <p>JOHAO MARCHANT VALENZUELA</p>
        </div>
        <div className='contenedorConcejal'>
          <img className='imgConcejal' src={Rivera} alt='' />
          <p>JUAN RIVERA ROJAS</p>
        </div>
        <div className='contenedorConcejal'>
          <img className='imgConcejal' src={Gachon} alt='' />
          <p>FERDINAND GACHÓN JEREZ</p>
        </div>
        <div className='contenedorConcejal'>
          <img className='imgConcejal' src={Lineros} alt='' />
          <p>JAIME LINEROS DÍAZ</p>
        </div>
      </div>

    </div>
  );
};
export default Consejales;
