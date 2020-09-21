import React from 'react';
import '../../assets/styles/ContenedorYoutube.scss';
import VideoItem from './VideoItem';

const ContenedorYoutube = () => {

  return (
    <div className='mainContainerYoutube'>
      <h3 className='youtubeTitle'>Ultimos Videos</h3>
      <div className='contenedorIframes'>
        <VideoItem videoName='1' className='miniIframe ' />
        <VideoItem videoName='2' className='miniIframe ' />
        <VideoItem videoName='3' className='miniIframe ' />
        <VideoItem videoName='4' className='miniIframe ' />
      </div>
    </div>
  );
};
export default ContenedorYoutube;

