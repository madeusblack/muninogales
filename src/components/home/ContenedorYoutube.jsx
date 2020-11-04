import React from 'react';
import '../../assets/styles/ContenedorYoutube.scss';
import VideoItem from './VideoItem';

const ContenedorYoutube = () => {
//HALLOWEEN 2020

  return (
    <div className='mainContainerYoutube'>
      <h3 className='youtubeTitle'>Ultimos Videos</h3>
      <div className='contenedorIframes'>
        <VideoItem fileName='halloween' title='HALLOWEEN 2020' className='miniIframe ' />
        <VideoItem fileName='centenarioUlda' title='100 años Esuela Ulda Aracena' className='miniIframe ' />
        <VideoItem fileName='1' title='Entrega de Mercaderia y Papas' className='miniIframe ' />
        <VideoItem fileName='2' title='Entrega RINJU' className='miniIframe ' />
      </div>
    </div>
  );
};
export default ContenedorYoutube;

