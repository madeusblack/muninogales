import React from 'react';
import '../../assets/styles/News.scss';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

const News = ({ news }) => {
  let noticias;
  if (news[0].id === 1) {
    noticias = news.reverse();
  } else {
    noticias = news;
  }
  return (
    <div className='newsContainer'>
      <h3 className='news'>Noticias</h3>
      {noticias.map((item) => (
        <NewsItem
          key={item.id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...item}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

export default connect(mapStateToProps, null)(News);
