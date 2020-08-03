import React from 'react';
import '../assets/styles/Home.scss';
import Carrousel from '../components/Carrousel';
import Highlighted from '../components/Highlighted';
import Links from '../components/Links';
import News from '../components/News';
import ContenedorYoutube from '../components/ContenedorYoutube';

const Home = () => (
  <div className='main'>
    <div className='CarouselCont'>
      <Carrousel />
    </div>
    <ContenedorYoutube />
    <News />
    <Highlighted />
    <Links />
  </div>
);
export default Home;
