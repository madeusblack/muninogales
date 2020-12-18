import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers/index';
import App from './routes/App';

const initialState = {
  'user': {},
  'reading': {},
  'news': [

    {
      'id': 1,
      'title': 'Autoridades incian ejecución del programa Quiero Mi Barrio en El Polígono',
      'date': 'Octubre 05, 2020',
      'contenido': [
        'Con la presencia de la Alcaldesa Margarita Osorio, la Diputada Camila Flores Oporto, el Consejero Regional Percy Marin; Nicolás Ormeño,  Secretario ejecutivo del Programa Recuperación de Barrios y una importante cantidad de vecinos y vecinas se realizó el Hito inaugural del Programa "Quiero mi Barrio" del sector del Polígono, proyecto gestionado por el Municipio y financiado por el Ministerio de Vivienda y Urbanismo por un monto de 800 millones de pesos.',
        'Importante es mencionar que este proyecto  se ejecutará por tres años y considera la habilitación de una oficina en dicho sector, donde estarán los profesionales que elaboran y ejecutan dicho programa con la supervisión de la Secretaría Comunal de Planificación del Municipio de Nogales. Este programa tiene como finalidad mejorar los barrios y para ello, considera la opinión de los vecinos para saber cuales con las necesidades y anhelos de los residentes, tales como plazas, juegos infantiles, materia se seguridad, entre otros.',
        'La Alcaldesa Margarita Osorio destacó lo difícil que fue conseguir estos recursos ante el Minvu, por lo que agradeció las gestiones de la Diputada Camila Flores y del Consejero Regional Percy Marín ante el Ministerio de Vivienda, obra que le permitirá cambiar la cara al sector de El Polígono, lugar donde vive mucha gente de esfuerzo y trabajo.',
        'Tras el corte de cinta que da El vamos al proyecto, las autoridades y vecinos pudieron apreciar parte de los dibujos que realizaron los menores del sector, a quienes se les pidió plasmar en imágenes lo que ellos anhelan para su sector, paneles donde destacaron más áreas verdes, juegos infantiles, espacios deportivos por mencionar algunos.',
        'Finalmente la Alcaldesa Margarita Osorio destacó la participación de los vecinos, ya que sin ellos este proyecto no tendría sentido de acuerdos a los lineamientos que tiene el Minvu para este tipo de programa, donde son los propios residentes los que eligen las mejoras en infraestructura del barrio donde viven.',
      ],
      'miniatura': 'quieromibarriomini',
      'imagenesPost': ['quieromibarrio', 'quieromibarrio2', 'quieromibarrio3', 'quieromibarrio4', 'quieromibarrio5', 'quieromibarrio6'],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 2,
      'title': 'Club deportivo Estrella Roja de El Melón contará con flamante sede social',
      'date': 'Octubre 15, 2020',
      'contenido': [
        'Hace pocos días comenzaron los trabajos de remodelación de la sede social del Club Deportivo Estrella Roja de El Melón, inmueble emplazado en el sector céntrico del distrito minero y que se encontraba en precarias condiciones estructurales y insalubre para las reuniones y actividades que desarrollan los jugadores, socios, socias y dirigentes de esta organización deportiva. Por ahora la cuadrilla municipal se encuentra trabajando en la remoción de toda la estructura, tarea que no ha sido fácil debido a lo antiguo de los materiales. ',
        'Esta sede será completamente remodelada gracias a un proyecto de 62 millones de pesos postulado por la Municipalidad de Nogales y financiado por el fondo FRIL (FONDO REGIONAL DE INICIATIVA LOCAL) del Gobierno Regional de Valparaíso. Sin duda un gran avance en materia de infraestructura para los vecinos del sector de El Melón, e incluso el proyecto contempla la habilitación de paredes anti ruidos, para evitar posibles molestias a los vecinos del sector. La empresa tiene un plazo de 100 días para finalizar los trabajos.',
      ],
      'miniatura': 'sedeestrellaroja',
      'imagenesPost': ['sedeestrellaroja'],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 3,
      'title': 'Galería de fotos hallowen 2020',
      'date': 'Noviembre 2, 2020',
      'type': 'galery',
      'contenido': [
        '',
      ],
      'miniatura': 'halloweenmini',
      'imagenesPost': ['halloween1', 'halloween2', 'halloween3', 'halloween4', 'halloween5', 'halloween6', 'halloween7', 'halloween8', 'halloween9', 'halloween10', 'halloween11', 'halloween12'],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 4,
      'title': 'Ya comenzó proceso de recambio de luminarias Led en la comuna',
      'date': 'Noviembre 3, 2020',
      'contenido': [
        'Este lunes comenzó a ejecutarse el proyecto de  REPOSICIÓN DE LUMINARIAS PÚBLICAS DE LA COMUNA DE NOGALES, proyecto que fue postulado por el municipio y aprobado por el Gobierno Regional de Valparaíso por la suma de Mil millones de pesos.',
        'La propia Alcaldesa Margarita Osorio supervisó el inicio del recambio de los trabajos por parte de la empresa Representaciones Offersuite Chile Limitada la que tiene un plazo de 90 días para la ejecución del proyecto.',
        'La jefa comunal se mostró muy contenta con el inicio de las obras, ya que este proyecto era muy necesario en materia de seguridad para los vecinos y vecinas de los sectores urbanos y rurales de la comuna de Nogales y El Melón; y de esta manera hacer frente  a la delincuencia.',
        'El proyecto contempla el recambio de 1693 luminarias con tecnología LED, los que reemplazarán a los antiguos focos que presentaban constantes fallas y los justificados reclamos de parte de la comunidad. La Jefa comunal precisó que la Secplac del municipio ya se encuentra trabajando en un nuevo proyecto para recambio de las luminarias LED para todo el sector rural de la comuna.',
        'Importante es mencionar que el municipio ya trabaja para postular un proyecto de recambio de luminarias LED para todo el sector rural.',
      ],
      'miniatura': 'instluminariasmini',
      'imagenesPost': ['instluminarias', 'instluminarias2', 'instluminarias3'],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 5,
      'title': 'Escuela Ulda Aracena celebrará centenario, en medio de una pandemia',
      'date': 'Noviembre 6, 2020',
      'type': 'galery',
      'contenido': [
        'En este mes de noviembre la Escuela municipal Ulda Aracena González cumple 100 años de trayectoria, educando a estudiantes de la comuna de Nogales.',
        'A través de diversas actividades y de manera online la Escuela celebrará este Centenario con bastante alegría y entusiasmo por parte de toda la comunidad educativa de la Escuela. Para ello, la Dirección y el equipo de gestión del establecimiento han querido realizar alianzas virtuales, se utiliza el Programa online “Together at home” transmitido a través de Facebook live, los martes y jueves a las 17:30,  para mantener un vínculo con las familias, los estudiantes y todos quienes quieran conectarse desde sus casas. Todas las semanas tendrán invitados especiales que recordarán el vínculo que tienen con la Escuela.',
        'Además, se preparó una producción audiovisual para festejar el cumpleaños junto a la comunidad, mientras los docentes continúan trabajando para mantener viva la tradición de la Escuela que es Educar con cariño, tal como lo dice su himno institucional.',
        'A través de la recolección de información sobre la Escuela, se ha podido reconstituir algo de su historia, como por ejemplo el primer nombre de la institución; escuela N° 25, luego Escuela N° 34 República del Ecuador, posteriormente fue llamada Escuela FN – 203 y en la actualidad se llama Escuela Ulda Aracena González.',
        'La Dirección y el equipo de gestión convocaron a las familias a participar del programa together at home, en dónde se realizarán entrevistas con anécdotas, con la historia de la Srta. Ulda Aracena González y por qué la escuela lleva su nombre.',
        'La Directora Karen Sepúlveda Córdova nos comentó que se siente muy emocionada, porque creo que es una experiencia no creo que se vuelva a repetir y es una experiencia muy positiva, con desafíos personales y profesionales por abordar y metas pedagógicas que cumplir y metas institucionales, por lo tanto, asumir este cargo y en esta instancia que se me da la posibilidad, encuentro que es un regalo de la vida.',
        'Queremos dar a conocer a la comunidad de Nogales quienes somos como Escuela y estos 100 años transfiriendo en un mes de aniversario, tenemos actividades programadas para todo el mes y semanalmente, instancias online y no online, desde acá de la Escuela, incorporando actividades que recorren lo que es la historia  y la tradición de lo que ha sido la Escuela Ulda Aracena.',
        'Del mismo modo, el Director del Daem Hernán Alarcón “quiso saludar afectuosamente a la Escuela Ulda Aracena González en su Centenario, a toda la comunidad educativa, a los que fueron creando este colegio desde sus inicios y a los que hoy día lo han ido consolidando. A todos y cada uno de ellos, un abrazo y en especial a los estudiantes que le dan vida y la forma  y que es la razón de ser de nuestro trabajo cotidiano.',
        'Un feliz Aniversario y que estos 100 años nos sirvan para seguir avanzando y consolidando  la educación municipal de Nogales”.',
      ],
      'miniatura': 'uldaCentenario',
      'imagenesPost': ['uldaCentenario'],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 6,
      'title': 'Liceo Juan Rusque Portal celebró Semana De La Ciencia con excelentes exponentes regionales de la ciencia y la física en conversatorios comunales',
      'date': 'Noviembre 23, 2020',
      'type': 'galery',
      'contenido': [
        'Para celebrar la semana de la Ciencia, el miércoles pasado,  los docentes del área de Ciencias del Liceo municipal Juan Rusque Portal realizaron un Conversatorio llamado “Experiencias y proyecciones de iniciativas científicas escolares en la comuna de Nogales”, en el cual participaron grandes exponentes del área científica regional y comunal.',
        'Entre los participantes, estuvieron presentes; el Dr. Mauricio Vergara Castro Investigador Laboratorio Cultivo Células Animales, perteneciente a la Escuela Ingeniería Bioquímica de la Pontificia Universidad Católica de Valparaíso, Jorge Alfredo Gonzales Moya Profesor de enseñanza Básica – Profesor de Historia, Magíster en Historia, con Doctorado en ciencias políticas públicas, además de ser el Director de Educación Futuro y Presidente Academia Diálogo, Rodrigo Huilipang Coordinador Ejecutivo Proyecto Asociativo Regional Explora y Sergio Balbontín Coordinador vinculación  con el medio de la Universidad de Valparaíso y profesor universidad de la misma Universidad.',
        'Por nuestra parte comunal, el Liceo Juan Rusque Portal quiso invitar a los siguientes colegios con sus respectivos docentes y estudiantes que participan activamente en el área de la Ciencia. ',
        `- Colegio El Melón:  Profesor Jaime Guerra;  Alumno: Broderick Carrasco
        - Escuela Ulda Aracena: Profesora; María Olga Díaz Olmos, Alumno: Matías Plaza 
        - Escuela La Peña: Profesora; Gabriela Tapia Fernández, Alumna: Melani Collao Santana
        - Liceo Juan Rusque Portal Profesor; Patricio Vásquez Estay, Alumna: Constanza Figueroa Zapata.
        `,
        'La actividad estuvo enmarcada en la semana de la Ciencia y en el Conversatorio se hablaron diferentes temas, en dónde cada estudiante y docente invitado exponían sus avances y proyectos referentes a la Ciencia y lo que realizan para poder lograrla en cada establecimiento educacional, para ello y como moderadora del Conversatorio estaba presente la docente de ciencias Daniela Ibaceta, quién entregaba la palabra al momento de las preguntas por parte de los invitados regionales.',
        'Es importante destacar que el sello del Liceo Municipal Juan Rusque Portal es Científico, por lo que este establecimiento educacional junto a sus docentes forman estudiantes con intereses en múltiples áreas pero se enfocan en la ciencia, tal es el caso que crearon la Academia comunal de Entropía a cargo del docente Patricio Vásquez Estay, en dónde cerca de 11 estudiantes han logrado competir con el proyecto investigación sobre la identificación de las propiedades antibacterianas en plantas de la localidad de Nogales en diferentes Ferias de Ciencia a nivel regional y Nacional.',
      ],
      'miniatura': 'semanaCiencia',
      'imagenesPost': ['semanaCiencia'],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 7,
      'title': 'Alcaldesa Margarita Osorio da el vamos a campaña para mejorar el Hospital Mario Sánchez de La Calera      ',
      'date': 'Noviembre 27, 2020',
      'contenido': [
        'Problemas en el sistema eléctrico e iluminación, deterioro de la pintura exterior e interior, baños de usuarios y funcionarios en malas condiciones, falta de hormigón en el sector de estacionamiento de urgencia y en el patio interior, necesidad de recambio de ventanas, fueron algunas de las falencias que pudo constatar la Alcaldesa de Nogales Margarita Osorio, en una visita realizada ayer al Hospital Doctor Mario Sánchez de la Calera, tras una reunión sostenida con la Directora de ese recinto, Verónica Morales y funcionarios del Servicio de Salud Viña del Mar- Quillota.',
        'La Jefa comunal había realizado un llamado al propio Ministro de Salud para mejorar el recinto asistencial, donde se atienden los vecinos y vecinas de Nogales, El Melón, La Calera e Hijuelas. Y en la reunión, la Alcaldesa explicó a la Directora del hospital que ya tiene conversado la donación de privados para realizar mejoras al centro hospitalario.',
        'La Alcaldesa, junto a personal del servicio de salud, pudo constatar las deficiencias de infraestructura del recinto, tomando nota de cada una de ellas, entre las que también se suman la necesidad de mejoras en la cocina, camarines de los funcionarios, reja exterior y paisajismo.',
        'Margarita Osorio explicó que “en esta visita recorrimos todo el recinto y pude apreciar lo precario del edificio en cuanto a servicios higiénicos, sistema eléctrico, pintura interior y exterior, falta de hormigón en el interior, deficiencias en los baños de los funcionarios, mejoras en la cocina, el mal estado de la morgue...en fin, una gran cantidad de falencias que como Alcaldesa tome nota, y solicitaré el apoyo de la empresa privada y la comunidad para que mejoremos el hospital que atiende a los vecinos de Nogales, El Melón, Hijuelas y La Calera”, dijo.',
        'Además indicó que “no pueden los funcionarios del hospital trabajar en esas precarias condiciones y tampoco los usuarios que no tienen los recursos para acceder a una atención particular. El Hospital ha tenido mejoras por parte del Servicio de Salud, pero falta mucho por hacer”, precisó.',
        'La Alcaldesa indicó que espera el apoyo de la mayor cantidad de empresas para realizar mejoras progresivamente a la infraestructura, reiterando el llamado de toda la comunidad a colaborar con el hospital Doctor Mario Sánchez.',
      ],
      'miniatura': 'hospital',
      'imagenesPost': ['hospital', 'hospital2', 'hospital3', 'hospital4'],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro'],
      'audios': ['hospitalAlcaldesa'],
    },
    {
      'id': 8,
      'title': 'Celebración de Navidad Nogales - El Melón 2020',
      'date': 'Diciembre 9, 2020',
      'type': 'galery',
      'contenido': [
        '',
      ],
      'miniatura': 'navidad',
      'imagenesPost': ['navidad', 'navidad2', 'navidad3', 'navidad4', 'navidad5', 'navidad6', 'navidad7', 'navidad8', 'navidad9', 'navidad10', 'navidad11', 'navidad12', 'navidad13', 'navidad14', 'navidad15', 'navidad16', 'navidad17'],
      'etiquetas': [],
      'audios': [],
    },

  ],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
