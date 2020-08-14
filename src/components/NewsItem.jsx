/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = (props) => {
  const { id, miniatura, title, date } = props;
  const src = require(`../assets/static/noticias/imagenes/${miniatura}.jpg`);
  return (
    <div className='newsItemContainer'>
      <p className='date'>{date}</p>
      <Link className='newsText' to={`/noticia/${id}`}>
        <img src={src} alt='' className='newsImage' />
        {title}
      </Link>
    </div>
  );
};

export default NewsItem;
