import React from 'react';
import styles from '../../assets/styles/LayoutContenidoMuniComuna.module.css';
import historia from '../../assets/static/comuna/hist3.jpg';

const Historia = () => {
  const contenidoA = `
    La comuna de Nogales nació como denominación geográfica,
    en el lugar correspondiente a la Séptima Subdelegación de Quillota, el 2 de Noviembre de 1878
    , cuando don José del Carmen Godoy Andreu en comunidad con su hermano Pedro Eleuterio 
    adquirieron de la sucesión de los hermanos Cortés, parte de la hacienda Los Litres.

    En principio los señores Godoy destinaron estas tierras a la agricultura,
    sin más casas que las ocupadas por ellos y las indispensables para los 
    agricultores que necesitaban en sus labores; el conjunto de este predio 
    se denominó “NOGALES”, por existir un árbol de esta especie muy frondoso
    que se arraigaba a la vera del camino público a unos 30 Mts. al Norte de
    la actual iglesia por la acera del frente.`;
  const contenidoB = `
    Este nombre lo absorbió la hacienda “Los Nogales”, que debido al gran auge comercial 
    y minero que tomó, hizo crecer rápidamente la población y se hizo necesario la creación 
    de correos y teléfonos que pasaron a llevar el nombre de “Los Nogales” como subdelegación 
    15 del depto. de Quillota, con una población mayor al millar de habitantes. 
    Desde su origen la comuna ha ido paulatinamente evolucionando, cobrando especial 
    relieve al auge minero que nació con la explotación de los minerales El Cobre y Minas Navío,
    lo cual fue dando un mayor impulso a su crecimiento, aparte de la explotación del agro que
    en conjunto conforman las riquezas básicas de la comuna.

    En 1876 se descubren otras minas de cobre, además de la ya explotada caliza.
    Para ese entonces existía una población de 1500 personas aproximadamente,
    de ese modo el melón ira tomando identidad propia entre cerros desde donde
    se ejecutan las faenas. A comienzos de siglo (1906), se inicia una nueva
    etapa para esta zona, pues nace la empresa cemento melón, que dio trabajo
    a una gran cantidad de personas, con lo que la población aumentó y se estabilizó.
    Así, como en muchas zonas mineras el poblamiento y la ocupación de terrenos fue
    espontánea orientándose hacia los cerros y quebradas. Dentro de este marco histórico
    – cultural se hace relevante mencionar a la Sra. Isabel Brown quien fue pieza clave
    en el desarrollo de la comuna en los comienzos de siglo, colaborando activamente
    con la comunidad hasta la fecha de su muerte, en 1942, a ella se deben innumerables
    adelantos en materias educativas y religiosas. Entre sus obras se destacan la
    Parroquia Santa Isabel de Hungría (Declarada Monumento Histórico Nacional” y su escuelita
    hoy Liceo “Felipe Cortes”`;
  return (
    <div className={styles.muniContainer}>
      <h1 className={styles.muniTitle}>HISTORIA</h1>
      <img className={styles.imgMunicipalidad} src={historia} alt='frontis de municipalidad' />
      <p>{contenidoA}</p>
      <p className={styles.bottomParraph}>{contenidoB}</p>

    </div>
  );
};
export default Historia;
