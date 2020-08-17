import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ProgramaMujer.scss';

const ContenedorProgramaMujer = () => (
  <div className='MainMujerContainer'>
    <h2>PROGRAMA MUJER TRABAJADORA Y JEFA DE HOGAR</h2>
    <h3 className='avisoCovid'>
      Debido a la emergencia sanitaria producto del Coronavirus, se suspende en todo el país el Programa Mujer Jefa de Hogar.
    </h3>
    <p className='parrafoMujer'>
      SI ERES JEFA DE HOGAR Y NECESITAS APOYO PARA MEJORAR TUS COMPETENCIAS
      LABORALES Y PODER INGRESAR AL MUNDO DEL TRABAJO, EL SERVICIO NACIONAL
      DE LA MUJER, SERNAM, TE OFRECE TALLERES DE FORMACION EN DOS PROGRAMAS:
      <br />
    </p>
    <div className='ContenedorProgramasMujer'>
      <Link to='/'>MUJERES JEFAS DE HOGAR</Link>
      <Link to='/'>MUJERES, ASOCIATIVIDAD Y EMPRENDIMIENTO</Link>
    </div>
  </div>
);
export default ContenedorProgramaMujer;
