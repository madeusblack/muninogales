import React from 'react';
import ContactoEducacion from '../components/educacion/ContactoEducacion';
import ListadoColegios from '../components/educacion/ListadoColegios';
import NoticiasEducacion from '../components/educacion/NoticiasEducacion';

const Educacion = () => (
  <div className='mainEducacion'>
    <ContactoEducacion />
    <NoticiasEducacion />
    <ListadoColegios />
  </div>
);
export default Educacion;
