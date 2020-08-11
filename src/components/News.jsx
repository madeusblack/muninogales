import React from 'react';
import '../assets/styles/News.scss';
import { connect } from 'react-redux';
import first from '../assets/static/news/20_censo_comunal.jpg';
import second from '../assets/static/news/20_aportepropio_covid-19.jpg';
import third from '../assets/static/news/20_sopraval_645cajas.jpg';
import fourth from '../assets/static/news/20_donacion_pulverizadoras.jpg';
import fifth from '../assets/static/news/20_189viviendas.jpg';
import sixth from '../assets/static/news/20_kitaseo_covid-19.jpg';
import seventh from '../assets/static/news/20_aljibes_gore.jpg';
import eighth from '../assets/static/news/20_donacion_ambulancia.jpg';

const News = () => (
  <div className='newsContainer'>
    <h3 className='news'>Noticias</h3>
    <div className='newsItemContainer'>
      <img src={first} alt='' className='newsImage' />
      <a className='newsText' href='/'>Municipio realiza “Censo Comunal” para detectar casos que no han recibido ayuda social</a>
      <p className='date'>Junio 11, 2020</p>
    </div>
    <div className='newsItemContainer'>
      <img src={second} alt='' className='newsImage' />
      <a className='newsText' href='/'>Con aportes propios municipio entrega mercadería a familias afectadas por el Covid-19</a>
      <p className='date'>Junio 08, 2020</p>
    </div>
    <div className='newsItemContainer'>
      <img src={third} alt='' className='newsImage' />
      <a className='newsText' href='/'>Sopraval entrega 645 cajas de alimentos a la comuna de Nogales</a>
      <p className='date'>Junio 05, 2020</p>
    </div>
    <div className='newsItemContainer'>
      <img src={fourth} alt='' className='newsImage' />
      <a className='newsText' href='/'>Municipio recibió valiosa donación de dos pulverizadores para sanitizar la comuna</a>
      <p className='date'>Junio 02, 2020</p>
    </div>
    <div className='newsItemContainer'>
      <img src={fifth} alt='' className='newsImage' />
      <a className='newsText' href='/'>En el primer semestre del próximo año entregarán 189 viviendas sociales en Nogales</a>
      <p className='date'>Junio 10, 2020</p>
    </div>
    <div className='newsItemContainer'>
      <img src={sixth} alt='' className='newsImage' />
      <a className='newsText' href='/'>Municipio entrega kit de aseo personal a las mamás como medida preventiva de Covid-19</a>
      <p className='date'>Junio 08, 2020</p>
    </div>
    <div className='newsItemContainer'>
      <img src={seventh} alt='' className='newsImage' />
      <a className='newsText' href='/'>Municipio recibió 3 nuevos camiones aljibe del Gobierno Regional de Valparaíso</a>
      <p className='date'>Junio 04, 2020</p>
    </div>
    <div className='newsItemContainer'>
      <img src={eighth} alt='' className='newsImage' />
      <a className='newsText' href='/'>Municipio recibió importante donación de ambulancia por parte de Anglo American</a>
      <p className='date'>Mayo 29, 2020</p>
    </div>
  </div>
);
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(News);
