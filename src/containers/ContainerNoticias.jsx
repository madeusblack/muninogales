/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';

import '../assets/styles/ContainerNoticias.scss';

const ContainerNoticias = (props) => {
  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.reading).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='containerNoticia'>
      <h1>
        {props.reading.title}
      </h1>
      <h4>
        {props.reading.subTitle}
      </h4>
      <h5>
        {props.reading.date}
      </h5>

      <div>
        {
          props.reading.imagenesPost.map((image) => {
            return (
              <img
                key={image}
                src={require(`../assets/static/noticias/imagenes/${image}`)}
                className='img-responsive'
                alt=''
              />
            );
          })
        }
      </div>
      <label htmlFor='imagen'>Asesor Jurídico, Alejandro Borbarán Ferández</label>
      <div>
        {
          props.reading.audios.map((audio) => {
            return (
              <audio
                key={audio}
                //src={require(`../assets/static/noticias/imagenes/${audio}`)}
                className='img-responsive'
                controls
              />
            );
          })
        }
      </div>
      <p>
        {props.reading.Contenido}
      </p>
    </div>
  ) : <h1>no encontrado</h1>;
};
const mapStateToProps = (state) => {
  return {
    reading: state.reading,
  };
};
const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContainerNoticias);
