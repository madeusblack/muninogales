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
        <YouTube opts={optsToSet} containerClassName='containerYoutube' className='miniIframe' videoId='hKVNq_v5pJM' />
        <YouTube opts={optsToSet} containerClassName='containerYoutube' className='miniIframe secundario' videoId='-F8_Q2UKtdU' />
        <YouTube opts={optsToSet} containerClassName='containerYoutube' className='miniIframe secundario' videoId='BAAIEZHJfF0' />
        <YouTube opts={optsToSet} containerClassName='containerYoutube' className='miniIframe secundario' videoId='2ncnQDXyleM' />
      </div>
    </div>
  );
};
export default ContenedorYoutube;

