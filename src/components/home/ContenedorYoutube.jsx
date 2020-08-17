import React from 'react';
import YouTube from 'react-youtube';
import '../../assets/styles/ContenedorYoutube.scss';

const ContenedorYoutube = () => {
  const optsToSet = {
    height: '250',
    width: '100%',
  };
  return (
    <div className='mainContainerYoutube'>
      <h3 className='youtubeTitle'>Ultimos Videos</h3>
      <div className='contenedorIframes'>
        <YouTube opts={optsToSet} containerClassName='containerYoutube' className='miniIframe' videoId='sC4IZNtTgvk' />
        <YouTube opts={optsToSet} containerClassName='containerYoutube' className='miniIframe secundario' videoId='BLiOerBsfwE' />
        <YouTube opts={optsToSet} containerClassName='containerYoutube' className='miniIframe secundario' videoId='-ZgWBAy7K0A' />
        <YouTube opts={optsToSet} containerClassName='containerYoutube' className='miniIframe secundario' videoId='QLaeBApyoVE' />
      </div>
    </div>
  );
};
export default ContenedorYoutube;

