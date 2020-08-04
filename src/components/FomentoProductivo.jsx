import React from 'react';
import '../assets/styles/LayoutContenidoMuniComuna.scss';
import historia from '../assets/static/historia/hist3.jpg';

const FomentoProductivo = () => {
  const contenidoA = `
    OBJETIVOS
    Unidad que tiene como objetivo apoyar el fortalecimiento 
    de la base económica local, integrada por la actividad empresarial,
    comercial, turística, artesanal y agrícola; por la vía de la asociatividad
    y liderazgo empresarial, orientada a canalizar de mejor forma el apoyo público
    , organizar la oferta, reducir las brechas entre empresarios y estimular
    oportunidades de negocios. Gestionar el acercamiento de los instrumentos
    de gobierno, orientados a la eficiencia de la gestión a través de capacitaciones.
  `;
  const contenidoB = `
    Direcciones de atención e inscripciones:

  `;
  const contenidoC = `
    Email
    fomentoproductivo@muninogales.cl
    fomentoproductivonogales@gmail.com
  `;
  const contenidoD = `
    Quienes pueden inscribirse:
    Pre-emprendedor: Usuario con emprendimiento y quiere realizar su idea de Negocio.
    Emprendedor: Usuario que realiza su idea de Negocio de manera informal y desea formalizar su actividad.
    Microempresario: Usuario Formalizado.

    Que debe hacer para inscribirse:

    CONCURRIR PERSONALMENTE.
    Fotocopia de Cédula de Identidad.
    Certificado de residencia o Boleta de pago de servicios (Luz o Agua).
    Número de contacto (fijo o móvil).
  `;
  return (
    <div className='muniContainer'>
      <h1 className='muniTitle'>FOMENTO PRODUCTIVO</h1>
      <img className='imgMunicipalidad' src={historia} alt='frontis de municipalidad' />
      <p>{contenidoA}</p>
      <p className='bottomParraph'>
        {contenidoB}
        <p>
          <b>MUNICIPALIDAD DE NOGALES</b>
          : Lunes a Jueves 08:30 hrs. a 12:00 hrs.
          <br />
          Direccion:
          <a href='https://www.google.com/maps/place/Pedro+Felix+Vicu%C3%B1a+199,+Nogales,+Valpara%C3%ADso/data=!4m2!3m1!1s0x9689cac8fdefdc5b:0xdd83d807f7488275?sa=X&ved=2ahUKEwj30sHSr8HqAhVJErkGHehGDl4Q8gEwAHoECAsQAQ'> Pedro Felix Vicuña 199, Nogales</a>

          <br />
          Teléfono :
          <a href='tel:+56332262811'> 33 2 262 811</a>
          <br />
          <b>DIDECO</b>
          : Viernes | 08:30 hrs. a 12:00 hrs. | calle Simón Bolívar Nº 12, Nogales.(Costado Cuerpo de Bomberos)
          Teléfono : +56 33 2262770
        </p>
      </p>
      <p className='bottomParraph'>{contenidoC}</p>
      <p className='bottomParraph'>{contenidoD}</p>

    </div>
  );
};
export default FomentoProductivo;