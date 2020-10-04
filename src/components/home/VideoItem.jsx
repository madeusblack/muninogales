/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../assets/styles/ContenedorYoutube.scss';
import SD1 from '../../assets/static/videos/1SD.mp4';
import HD1 from '../../assets/static/videos/1HD.mp4';
import IMG1 from '../../assets/static/videos/IMG1.jpg';
import SD2 from '../../assets/static/videos/2SD.mp4';
import HD2 from '../../assets/static/videos/2HD.mp4';
import IMG2 from '../../assets/static/videos/IMG2.jpg';
import SD3 from '../../assets/static/videos/3SD.mp4';
import HD3 from '../../assets/static/videos/3HD.mp4';
import IMG3 from '../../assets/static/videos/IMG3.jpg';
import SD4 from '../../assets/static/videos/4SD.mp4';
import HD4 from '../../assets/static/videos/4HD.mp4';
import IMG4 from '../../assets/static/videos/IMG4.jpg';

const VideoItem = ({ videoName, title }) => {
  let videoSD;
  let videoHD;
  let videoMiniature;
  let name;
  switch (videoName) {
    case '1':
      videoSD = SD1;
      videoHD = HD1;
      videoMiniature = IMG1;
      name = '1';
      break;
    case '2':
      videoSD = SD2;
      videoHD = HD2;
      videoMiniature = IMG2;
      name = '2';
      break;
    case '3':
      videoSD = SD3;
      videoHD = HD3;
      videoMiniature = IMG3;
      name = '3';
      break;
    default:
      videoSD = SD4;
      videoHD = HD4;
      videoMiniature = IMG4;
      name = '4';
      break;
  }

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
