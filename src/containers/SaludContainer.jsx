import React from 'react';
import styles from '../assets/styles/SaludContainer.module.css';

const SaludContainer = () => {
  return (
    <div className={styles.contenedorSalud}>
      <h1>Departamento de Salud insta a usuarios a que llamen por teléfono a consultorios en casos de sospecha de COVID-19</h1>
      <h3>Con el objetivo de evitar la programación de corona virus entre los vecinos de la comuna, ante la sospecha de contagio de esta enfermedad, el Departamento de Salud de Nogales instó a los vecinos a que se contacten por teléfono en los Cesfam y Cecosf que posee la comuna con el fin de recibir atención médica a domicilio por parte de personal que ha sido preparado para esta emergencia.</h3>
      <p>
        Manuel Marín, director del Departamento, precisó que el objetivo es que aquellos casos sospechosos de contagio reciban atención domiciliaria como media preventiva, siguiendo los protocolos que ha instruido el ministerio de salud.
        <br />
        Para tal efecto los teléfonos son los siguientes:
        <br />
        Cesfam Nogales:
        <a href='tel:+56332262944'>33 2 262944</a>
        <br />
        Cesfam El Melón:
        <a href='tel:+5633 2 280256'>33 2 280256</a>
        <br />

        Cecosf Ex Asentamiento:
        <a href='tel:+56 33 2 281347'> 33 2 281347</a>
        <a href='tel:+56 9 74977034'> 9 74977034</a>
        <br />

        Cecosf El Polígono:
        <a href='tel:+5633 2 298434'>33 2 298434</a>
        <br />

        En cuanto a la campaña de vacunación contra la influenza, Marín precisó que ayer lunes se vacunaron 1200 personas, similar número que hoy martes. Y que para atender a la población más vulnerable como los pacientes postrados y personas con dificultad de desplazamiento, funcionarios de los cuatro centros asistenciales están vacunando en los domicilios de estas personas.
        <br />
        A su vez, hizo un llamado a los adultos mayores que eviten acercarse en masa a los centros de salud para vacunarse, y así cumplir unas de las medidas más estrictas que ha impartido el Ministerio de Salud con el fin de evitar contagios por aglomeración.
        <br />
        En cuanto a la vacunación de los estudiantes, Manuel Marín indicó que durante el miércoles, jueves y viernes los funcionarios de salud irán a vacunar a los alumnos y alumnas en sus respectivos establecimientos, y que será la dirección de los colegios junto con el Daem los encargados de citar en los respectivos días y horarios a los educandos.
      </p>
    </div>
  );
};
export default SaludContainer;
