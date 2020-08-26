import React from 'react';
import '../assets/styles/NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => (

  <div className='ContainerNotFound'>
    <h1>
      Pagina No encontrada
      <Link to='/'>
        Click Aqui
      </Link>
      Para volver al inicio
    </h1>
  </div>

);
export default NotFound;
