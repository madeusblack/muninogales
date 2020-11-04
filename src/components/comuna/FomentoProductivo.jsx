import React from 'react';
import styles from '../../assets/styles/LayoutContenidoMuniComuna.module.css';
import fomento from '../../assets/static/comuna/fomento1.jpg';

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
  const contenidoB = 'Direcciones de atención e inscripciones:';

  return (
    <div className={styles.muniContainer}>
      <h1 className={styles.muniTitle}>FOMENTO PRODUCTIVO</h1>
      <img className={styles.imgMunicipalidad} src={fomento} alt='frontis de municipalidad' />
      <p>{contenidoA}</p>
      <p className={styles.bottomParraph}>
        {contenidoB}
        <br />
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
        : Viernes 08:30 hrs. a 12:00 hrs.
        <br />
        Direccion:
        <a href="https://www.google.cl/maps/place/32%C2%B044'09.6%22S+71%C2%B012'00.7%22W/@-32.736003,-71.2007332,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d-32.7360027!4d-71.2001861?hl=es-419&authuser=0"> Simón Bolívar Nº 12, Nogales.(Costado Cuerpo de Bomberos)</a>
        <br />
        Teléfono :
        <a href='tel:+56332262770'> 33 2 262 770</a>
      </p>
      <p className={styles.bottomParraph}>
        <b>Email:</b>
        <br />
        <a href='mailto:fomentoproductivo@muninogales.cl'>fomentoproductivo@muninogales.cl</a>
        <br />
        <a href='mailto:fomentoproductivonogales@gmail.com'>fomentoproductivonogales@gmail.com</a>
      </p>

      <p className={styles.bottomParraph}>
        Quienes pueden inscribirse:
        <br />
        <b>Pre-emprendedor: </b>
        Usuario con emprendimiento y quiere realizar su idea de Negocio.
        <br />
        <b>Emprendedor: </b>
        Usuario que realiza su idea de Negocio de manera informal y desea formalizar su actividad.
        <br />
        <b>Microempresario: </b>
        Usuario Formalizado.
        <br />
        <br />

        Que debe hacer para inscribirse:
        <br />

        <b>CONCURRIR PERSONALMENTE.</b>
        <br />
        Fotocopia de Cédula de Identidad.
        <br />
        Certificado de residencia o Boleta de pago de servicios (Luz o Agua).
        <br />
        Número de contacto (fijo o móvil).
      </p>

    </div>
  );
};
export default FomentoProductivo;
