import React from 'react';
import '../../assets/styles/ContenedorYoutube.scss';
import VideoItem from './VideoItem';

const ContenedorYoutube = () => {

  return (
    <div className='mainContainerYoutube'>
      <h3 className='youtubeTitle'>Ultimos Videos</h3>
      <div className='contenedorIframes'>
        <VideoItem videoName='1' title='Entrega de Mercaderia y Papas' className='miniIframe ' />
        <VideoItem videoName='2' title='Entrega RINJU' className='miniIframe ' />
        <VideoItem videoName='3' title='Entrega Tablets' className='miniIframe ' />
        <VideoItem videoName='4' title='Búsqueda Activa Covid-19' className='miniIframe ' />
      </div>
    </div>
  );
};
export default ContenedorYoutube;

