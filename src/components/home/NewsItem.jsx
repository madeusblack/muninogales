/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = (props) => {
  const { id, miniatura, title, date } = props;
  const src = require(`../../assets/static/noticias/imagenes/${miniatura}.jpg`);
  const srcwebp = require(`../../assets/static/noticias/imagenes/${miniatura}.webp`);

  return (
    <div className='newsItemContainer'>
      <Link className='newsText' to={`/noticia/${id}`}>
        <picture>
          <source srcSet={srcwebp} type='image/webp' />
          <source srcSet={src} type='image/jpeg' />
          <img className='newsImage' loading='lazy' csr={src} alt='' />
        </picture>
        <p className='date'>{date}</p>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default NewsItem;
