import React from 'react';
import '../assets/styles/Home.scss';
import Carrousel from '../components/home/Carrousel';
import Highlighted from '../components/home/Highlighted';
import Links from '../components/home/Links';
import News from '../components/home/News';
import ContenedorYoutube from '../components/home/ContenedorYoutube';
import Informaciones from '../components/home/Informaciones';

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
