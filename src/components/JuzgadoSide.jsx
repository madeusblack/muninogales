import React from 'react';
import '../assets/styles/JuzgadoSide.scss';

const JuzgadoSide = () => (
  <div className='juzgadoSideContainer'>
    <h3 className='juzgadoTitle'>Informaciones</h3>
    <h4 className='juzgadoInfoa'>Horario: Lunes a Viernes de 8:30 a 12:00 horas.</h4>
    <h4 className='juzgadoInfob'>
      Contacto:
      <a className='linkJuzgado' href='mailto:juzgado@nogales.cl'> juzgado@muninogales.cl</a>
    </h4>
    <h4 className='juzgadoInfoa'>
      Telefono:
      <a className='linkJuzgado' href='tel:+56992329434'> +56 9 9232 9434</a>
    </h4>
    <h4 className='juzgadoInfob'>
      DÍAS Y HORARIO DE AUDIENCIAS: Previa citación, solo martes, miércoles y jueves a
      partir de las 10:00 horas.
    </h4>
    <h4 className='juzgadoInfoa'>
      Direccion:
      <a className='linkJuzgado' href="https://www.google.com/maps/place/32%C2%B044'03.6%22S+71%C2%B012'05.4%22W/@-32.7343429,-71.2020422,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d-32.7343437!4d-71.2014948">Pedro Felix Vicuña 199, Nogales</a>
    </h4>
    <h4 className='juzgadoInfob'>
      Mas informacion sobre tipos de faltas al reglamento de transito
      <a target='_blank' className='linkJuzgado' rel='noreferrer' href="https://practicatest.cl/blog/tramites-y-renovaciones/tipos-de-multas-transito-en-chile-valores#gsc.tab=0"> click aquí</a>
    </h4>
  </div>

);
export default JuzgadoSide;
