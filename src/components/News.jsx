import React from 'react';
import '../assets/styles/News.scss';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

const News = ({ news }) => (
  <div className='newsContainer'>
    <h3 className='news'>Noticias</h3>
    {news.map((item) => (
      <NewsItem
        key={item.id}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...item}
      />
    ))}
  </div>
);
const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

export default connect(mapStateToProps, null)(News);
