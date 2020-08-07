import React from 'react';
import '../assets/styles/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import instagram from '../assets/static/header/instagram.png';
import mail from '../assets/static/header/mail.png';
import twitter from '../assets/static/header/twitter.png';
import youtube from '../assets/static/youtube.png';
import lobby from '../assets/static/lobby.png';
import sai from '../assets/static/sai.png';
import tai from '../assets/static/tai.png';
import comisaria from '../assets/static/header/comisaria.jpg';
import pasoapaso from '../assets/static/header/pasoapaso.png';


import LinksServicios from './LinksServicios';

const Header = () => (
  <div className='headerContainer'>
    <div className='lowerHeader'>
      <div className='lowerHeaderLeft'>
        <Link to='/'>INICIO</Link>
        <LinksServicios tipo='muni' />
        <LinksServicios tipo='comuna' />
        <LinksServicios tipo='beneficios' />

        <LinksServicios />
      </div>
      <div className='lowerHeadeRight'>
        <Link to='/juzgado'>JUZGADO POLICÍA LOCAL</Link>
        <a target='_blank' rel='noopener noreferrer' href='http://www.indap.gob.cl/'>PRODESAL</a>
        <a target='_blank' rel='noopener noreferrer' href='http://www.nogaleschile.cl/'>EDUCACIÓN</a>
        <a target='_blank' rel='noopener noreferrer' href='http://site.saludnogales.cl/'>SALUD</a>
      </div>
    </div>
    <div className='upperHeader'>
      <div className='Left'>
        <Link to='/'>
          <img src={logo} alt='Logo munnicipalidad de Nogales' />
        </Link>
      </div>
      <div className='upperRight'>
        <p>Siguenos en:</p>
        <a target='_blank' rel='noopener noreferrer' className='icon' href='https://www.youtube.com/channel/UCpURFVn_rEYNePMMhw_-fWw'>
          <img src={youtube} alt='Canal de Youtube' />
        </a>
        <a target='_blank' rel='noopener noreferrer' className='icon' href='https://twitter.com/muninogales'>
          <img src={twitter} alt='Twitter' />
        </a>
        <a target='_blank' rel='noopener noreferrer' className='icon' href='http://mail.google.com/a/muninogales.cl'>
          <img src={instagram} alt='Inicio de sesion de correo de Funcionarios' />
        </a>
        <a target='_blank' rel='noopener noreferrer' className='icon' href='http://mail.google.com/a/muninogales.cl'>
          <img src={mail} alt='Inicio de sesion de correo de Funcionarios' />
        </a>

      </div>
      <div className='lowerRight'>
        <Link to='/pasoapaso'>
          <img className='estadoComuna' src={pasoapaso} alt='Lobby y gestion de intereses particulares' />
        </Link>
        <a target='_blank' rel='noopener noreferrer' href='https://www.leylobby.gob.cl/instituciones/MU183'>
          <img src={lobby} alt='Lobby y gestion de intereses particulares' />
        </a>
        <a target='_blank' rel='noopener noreferrer' href='http://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=0078b82e8b3606aa549688114c54effe'>
          <img src={sai} alt='Solicitar informacion ley de transparencia' />
        </a>
        <a target='_blank' rel='noopener noreferrer' href='http://www.portaltransparencia.cl/PortalPdT/pdtta?codOrganismo=MU183'>
          <img src={tai} alt='transparencia activa ley de transparencia' />
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://comisariavirtual.cl/'>
          <img src={comisaria} alt='transparencia activa ley de transparencia' />
        </a>
      </div>
    </div>

  </div>
);
export default Header;
