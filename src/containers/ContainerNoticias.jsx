/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/styles/ContainerNoticias.scss';
import portada from '../assets/static/noticias/facilidad.jpg';
import audio from '../assets/static/noticias/20_patentes_facilidad_borbaran.mp3';

const ContainerNoticias = (props) => {
 // const { id, cover, title, year, contentRating, duration, isList } = props;
  return (
    <div className='containerNoticia'>
      <h1>
        MUNICIPIO OTORGA FACILIDADES DE PAGO DE PATENTES A LOS COMERCIANTES PRODUCTO DE LA PANDEMIA
      </h1>

      <img name='imagen' src={portada} alt='' />
      <label htmlFor='imagen'>Asesor Jurídico, Alejandro Borbarán Ferández</label>
      <audio src={audio} controls />
      <p>
        El periodo de pandemia ha significado una gran baja en las ventas de los comerciantes locales de la comuna de Nogales y El Melón. La disminución de los ingresos de los vecinos y la pérdida del empleo han gatillado un gran problema para los propietarios de los almacenes y comercio en general, los que legalmente tienen hasta el 31 de Julio para pagar su patente.
        Es por esta razón que la Alcaldesa Margarita Osorio –con las facultades que le otorga la ley- quiso dar una ayuda a este rubro que también es una importante fuente de empleo en la comuna y presentó una modificación que fue aprobada por el Concejo Municipal, consistente en tres alternativas de pago de las patentes comerciales, industriales y de alcohol destinada a las micro, pequeñas y medianas empresas.
        De este modo, los comerciantes podrán tener las siguientes opciones: Primero, pago de forma normal hasta 31 julio; segundo, postergación en 3 meses del pago de la patente del mes de julio 2020, sin intereses ni multas y pago con vencimiento el 31 de octubre 2020.
        Y finalmente el pago de la patente en 6 cuotas iguales, sin intereses ni multas a diciembre de 2020.
        Los contribuyentes interesados en acceder a esta flexibilidad de pago deben retirar el formulario en la oficina de partes del municipio ubicada en el edificio municipal y de ahí serán derivados a la Unidad de Rentas.
        El Asesor Jurídico Municipal, Abogado Alejandro Borbarán precisó que la opción elegida dependerá de las necesidades o situación en la que se encuentre cada uno de los comerciantes pero que es importante dejar en claro que es sin multas e intereses.
        Importante es mencionar que de este beneficio queda excluida el pago de las patentes profesionales, pero sin lugar a dudas es un gran alivio para el comercio establecido de la comuna de Nogales y El Melón.
      </p>
    </div>
  );
};
export default ContainerNoticias;
