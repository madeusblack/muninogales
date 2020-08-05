import React from 'react';
import '../assets/styles/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import mail from '../assets/static/mail.png';
import twitter from '../assets/static/twitter.png';
import youtube from '../assets/static/youtube.png';
import lobby from '../assets/static/lobby.png';
import sai from '../assets/static/sai.png';
import tai from '../assets/static/tai.png';
import LinksServicios from './LinksServicios';

const Header = () => (
  <>
    <div className='lowerHeader'>
      <div className='lowerHeaderLeft'>
        <Link to='/'>INICIO</Link>
        <LinksServicios tipo='muni' />
        <LinksServicios tipo='comuna' />
        <LinksServicios />
      </div>
      <div className='lowerHeadeRight'>
        <Link to='/juzgado'>JUZGADO POLICÍA LOCAL</Link>
        <a target='blank' href='http://www.indap.gob.cl/'>PRODESAL</a>
        <a target='blank' href='http://www.nogaleschile.cl/'>EDUCACIÓN</a>
        <a target='blank' href='http://site.saludnogales.cl/'>SALUD</a>
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
        <a target='blank' className='icon' href='https://www.youtube.com/channel/UCpURFVn_rEYNePMMhw_-fWw'>
          <img src={youtube} alt='Canal de Youtube' />
        </a>
        <a target='blank' className='icon' href='https://twitter.com/muninogales'>
          <img src={twitter} alt='Twitter' />
        </a>
        <a target='blank' className='icon' href='http://mail.google.com/a/muninogales.cl'>
          <img src={mail} alt='Inicio de sesion de correo de Funcionarios' />
        </a>
      </div>
      <div className='lowerRight'>
        <a target='blank' href='https://www.leylobby.gob.cl/instituciones/MU183'>
          <img src={lobby} alt='Lobby y gestion de intereses particulares' />
        </a>
        <a target='blank' href='http://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=0078b82e8b3606aa549688114c54effe'>
          <img src={sai} alt='Solicitar informacion ley de transparencia' />
        </a>
        <a target='blank' href='http://www.portaltransparencia.cl/PortalPdT/pdtta?codOrganismo=MU183'>
          <img src={tai} alt='transparencia activa ley de transparencia' />
        </a>
      </div>
    </div>

  </>
);
export default Header;
