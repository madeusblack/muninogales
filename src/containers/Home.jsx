import React from 'react';
import '../assets/styles/Home.scss';
import Carrousel from '../components/Carrousel';
import Highlighted from '../components/Highlighted';
import Links from '../components/Links';
import News from '../components/News';
import ContenedorYoutube from '../components/ContenedorYoutube';
import Informaciones from '../components/Informaciones';

const Home = () => (
  <div className='main'>
    <Carrousel />
    <ContenedorYoutube />
    <News />
    <Links />
    <Highlighted />
    <Informaciones />
  </div>
);
export default Home;
