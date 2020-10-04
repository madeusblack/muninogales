import React from 'react';
import '../../assets/styles/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/static/header/logo.png';
import instagram from '../../assets/static/header/instagram.png';
import instagramwebp from '../../assets/static/header/instagram.webp';
import mail from '../../assets/static/header/mail.png';
import mailwebp from '../../assets/static/header/mail.webp';
import twitter from '../../assets/static/header/twitter.png';
import twitterwebp from '../../assets/static/header/twitter.webp';
import youtube from '../../assets/static/header/youtube.png';
import youtubewebp from '../../assets/static/header/youtube.webp';
import lobby from '../../assets/static/header/lobby.png';
import lobbywebp from '../../assets/static/header/lobby.webp';
import sai from '../../assets/static/header/sai.png';
import saiwebp from '../../assets/static/header/sai.webp';
import tai from '../../assets/static/header/tai.png';
import taiwebp from '../../assets/static/header/tai.webp';
import comisaria from '../../assets/static/header/comisaria.jpg';
import comisariawebp from '../../assets/static/header/comisaria.webp';
import pasoapaso from '../../assets/static/header/pasoapaso.png';
import pasoapasowebp from '../../assets/static/header/pasoapaso.webp';
import LinksServicios from './LinksServicios';
import emergencia from '../../assets/static/header/emergencia.png';
import emergenciawebp from '../../assets/static/header/emergencia.webp';

const Header = () => (
  <div className='headerContainer'>
    <div className='lowerHeader'>
      <div className='lowerHeaderLeft'>
        <Link to='/'>INICIO</Link>
        <LinksServicios tipo='muni' className='mobileMenuLink' />
        <LinksServicios tipo='comuna' />
        <LinksServicios tipo='beneficios' />
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
          <picture>
            <source srcSet={youtubewebp} type='image/webp' />
            <source srcSet={youtube} type='image/png' />
            <img csr={youtube} alt='canal youtube' />
          </picture>
        </a>
        <a target='_blank' rel='noopener noreferrer' className='icon' href='https://twitter.com/muninogales'>
          <picture>
            <source srcSet={twitterwebp} type='image/webp' />
            <source srcSet={twitter} type='image/png' />
            <img csr={twitter} alt='Twitter' />
          </picture>
        </a>
        <a target='_blank' rel='noopener noreferrer' className='icon' href='https://www.instagram.com/muninogales5/'>
          <picture>
            <source srcSet={instagramwebp} type='image/webp' />
            <source srcSet={instagram} type='image/png' />
            <img csr={instagram} alt='Instagram' />
          </picture>
        </a>
        <a target='_blank' rel='noopener noreferrer' className='icon' href='http://mail.google.com/a/muninogales.cl'>
          <picture>
            <source srcSet={mailwebp} type='image/webp' />
            <source srcSet={mail} type='image/png' />
            <img csr={mail} alt='Inicio de sesion de correo de Funcionarios' />
          </picture>
        </a>
      </div>
      <div className='lowerRight'>
        <a target='_blank' rel='noopener noreferrer' href='https://www.leylobby.gob.cl/instituciones/MU183'>
          <picture>
            <source srcSet={lobbywebp} type='image/webp' />
            <source srcSet={lobby} type='image/png' />
            <img className='headerLink' csr={lobby} alt='Lobby y gestion de intereses particulares' />
          </picture>
        </a>
        <a target='_blank' rel='noopener noreferrer' href='http://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=0078b82e8b3606aa549688114c54effe'>
          <picture>
            <source srcSet={saiwebp} type='image/webp' />
            <source srcSet={sai} type='image/png' />
            <img className='headerLink' csr={sai} alt='Solicitar informacion ley de transparencia' />
          </picture>
        </a>

        <a target='_blank' rel='noopener noreferrer' href='http://www.portaltransparencia.cl/PortalPdT/pdtta?codOrganismo=MU183'>
          <picture>
            <source srcSet={taiwebp} type='image/webp' />
            <source srcSet={tai} type='image/png' />
            <img className='headerLink' csr={tai} alt='transparencia activa ley de transparencia' />
          </picture>
        </a>
        <Link to='/pasoapaso'>
          <picture>
            <source srcSet={pasoapasowebp} type='image/webp' />
            <source srcSet={pasoapaso} type='image/png' />
            <img className='headerLink' csr={pasoapaso} alt='Estado comuna paso a paso' />
          </picture>
        </Link>
        <a target='_blank' rel='noopener noreferrer' href='https://comisariavirtual.cl/'>
          <picture>
            <source srcSet={comisariawebp} type='image/webp' />
            <source srcSet={comisaria} type='image/jpeg' />
            <img className='headerLink' csr={comisaria} alt='comisaria virtual' />
          </picture>
        </a>
        <Link to='/emergencias'>
          <picture>
            <source srcSet={emergenciawebp} type='image/webp' />
            <source srcSet={emergencia} type='image/png' />
            <img className='headerLink' csr={emergencia} alt='Estado comuna paso a paso' />
          </picture>
        </Link>
      </div>
    </div>
  </div>
);
export default Header;
