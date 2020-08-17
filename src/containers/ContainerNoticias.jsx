/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/ContainerNoticias.scss';

const ContainerNoticias = (props) => {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.reading).length > 0;

  useEffect(() => {
    dispatch(getVideoSource(id));
  }, [dispatch, id]);
  return hasPlaying ? (
    <div className='containerNoticia'>
      <div>
        <h1>
          {props.reading.title}
        </h1>
        <h4>
          {props.reading.subTitle}
        </h4>
        <h5>
          {props.reading.date}
        </h5>
        <div className='contenidoNoticia'>
          {
            props.reading.contenido.map((parrafo) => {
              return (
                <p key={parrafo} className='parrafo'>
                  {parrafo}
                </p>
              );
            })
          }
        </div>
      </div>
      <div>
        {
          props.reading.imagenesPost.map((image) => {
            return (
              <img
                key={image}
                src={require(`../assets/static/noticias/imagenes/${image}.jpg`)}
                className='img-responsive'
                alt=''
              />
            );
          })
        }

        <div className='audioNoticias'>
          {
            props.reading.audios.map((audio) => {
              const idEtiquetas = (element) => element === audio;
              const posicionEtiqueta = props.reading.audios.findIndex(idEtiquetas);
              if (audio !== '') {
                return (
                  <div className='audioEtiquetaContainer'>
                    <label htmlFor={audio}>
                      {props.reading.etiquetas[posicionEtiqueta]}
                    </label>
                    <audio
                      key={audio}
                      src={require(`../assets/static/noticias/audios/${audio}.mp3`)}
                      className='img-responsive'
                      controls
                    />
                  </div>
                );
              };
              return '';
            })
          }
        </div>
      </div>
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
