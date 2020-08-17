import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/MobileMenu.scss';
import '../../assets/styles/HamburgerMenu.scss';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../assets/static/header/logo.png';
import LinksMenuMovil from './LinksMenuMovil';

const MobileHeader = () => {

  return (
    <Menu className='HamburgerButton'>
      <img className='logoMuni' src={logo} alt='Logo munnicipalidad de Nogales' />
      <Link className='mobileMenuLink' to='/'>INICIO</Link>
      <LinksMenuMovil tipo='muni' />
      <LinksMenuMovil tipo='comuna' />
      <LinksMenuMovil className='mobileMenuLink bm-item' />
      <Link className='mobileMenuLink' to='/juzgado'>JUZGADO POLICÍA LOCAL</Link>
      <a className='mobileMenuLink' target='blank_' href='http://www.indap.gob.cl/'>PRODESAL</a>
      <a className='mobileMenuLink' target='blank_' href='http://www.nogaleschile.cl/'>EDUCACIÓN</a>
      <a className='mobileMenuLink' target='blank_' href='http://site.saludnogales.cl/'>SALUD</a>
    </Menu>
  );
};
export default MobileHeader;
