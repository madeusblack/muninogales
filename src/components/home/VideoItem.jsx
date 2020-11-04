/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../assets/styles/ContenedorYoutube.scss';

const VideoItem = ({ title, fileName }) => {
  const name = fileName;
  const videoSD = require(`../../assets/static/videos/${fileName}SD.mp4`);
  const videoHD = require(`../../assets/static/videos/${fileName}HD.mp4`);
  const videoMiniature = require(`../../assets/static/videos/${fileName}.jpg`);

  return (
    <div className='videoContainer'>
      <h3 className='videoTitle'>{title}</h3>
      <div className='qualityContainer'>
        <label htmlFor={name}>Calidad:</label>
        <select name={name} id={name} autoComplete='off'>
          <option defaultValue>HD</option>
          <option>SD</option>
        </select>
      </div>
      <video controls preload='none' className='videoItem' poster={videoMiniature}>
        <source label='SD' src={videoSD} type='video/mp4' />
        <source label='HD' src={videoHD} type='video/mp4' />
      </video>
    </div>
  );
};
export default VideoItem;
