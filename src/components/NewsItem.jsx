/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = (props) => {
  const { id, miniatura, title, date } = props;
  const src = require(`../assets/static/noticias/imagenes/${miniatura}`);
  return (
    <div className='newsItemContainer'>
      <img src={src} alt='' className='newsImage' />
      <Link className='newsText' to={`/noticia/${id}`}>{title}</Link>
      <p className='date'>{date}</p>
    </div>
  );
};

export default NewsItem;
