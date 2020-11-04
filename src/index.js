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
      'title': 'Municipalidad entregó subvención a Comité de Vivienda Los Jardines de Nogales',
      'date': 'Septiembre 14, 2020',
      'contenido': [
        'La Alcaldesa Margarita Osorio, la Directora de Adm. y Finanzas, hicieron efectiva la entrega de un cheque por la suma de 5 millones de pesos a la directiva del  comité de Vivienda Los Jardines de Nogales. Con ese monto y el ahorro de los socios y socias de esa agrupación, los vecinos podrán habilitar panderetas en sus futuras casas, proyecto habitacional que beneficiará a 140 familias de la comuna. ',
        'La Jefa Comunal se mostró muy contenta con este aporte que permitirá a los vecinos construir este cierre perimetral a cada vivienda, lo que fue posible gracias a una subvención municipal.',
        'Las dirigentes agradecieron el aporte de la administración municipal, lo que les permitirá tener una mejor calidad de vida y privacidad.',
      ],
      'miniatura': 'entregasubsidiocierre',
      'imagenesPost': ['entregasubsidiocierre'],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 2,
      'title': 'Vecinos de la Población La Unión contarán con flamante sede social',
      'date': 'Septiembre 14, 2020',
      'contenido': [
        'Con la presencia de la Alcaldesa Margartita Osorio y las dirigentes de la JJVV La Unión se desarrolló este lunes la colocación de la primera piedra del proyecto de construcción de la sede social del sector, que no contaba con ese equipamiento comunitario. Se trata de un proyecto postulado por el municipio y financiado por el fondo FRIL del Gobierno Regional de Valparaíso, el que asciende a 77 millones de pesos y que permitirá a los vecinos contar con un espacio de 120 metros cuadrados, que contempla un amplio salón, cocina y servicios higiénicos para damas y varones y personas con capacidades diferentes. Se espera que la obra esté entregada a los vecinos a fines de este 2020.',
      ],
      'miniatura': 'sedeunion',
      'imagenesPost': ['sedeunion'],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 3,
      'title': 'Estudiantes de Pre Kínder Municipales reciben set RINJU de equipamiento infantil, para el juego y la estimulación en sus casas',
      'date': 'Septiembre 22, 2020',
      'contenido': [
        'El martes 22 de septiembre se realizó la entrega del SET RINJU para los 92 niños y niñas de los niveles de transición 1 (NT1) de los establecimientos educacionales municipalizados de la comuna de Nogales. La actividad comenzó a eso de las 11:00 en las dependencias de la Sala Cuna La Peña.',
        'Respetando los protocolos internos de higiene y seguridad para prevenir contagios por COVID-19 a la actividad asistieron la Alcaldesa Margarita Osorio, el Seremi de Desarrollo Social Ricardo Figueroa, el Gobernador de Quillota Iván Cisternas, el Director del Departamento de Educación de Nogales Hernán Alarcón, los Directores de los cuatro escuelas municipales, docentes y apoderados, etc.',
        'La Municipalidad de Nogales a través de su Departamento de Educación en conjunto con el Ministerio de Desarrollo Social y en unión con el Programa Chile Crece Contigo, realizaron la entrega formal de la Caja RINJU, que consiste en un equipamiento infantil para el juego y la estimulación de los pequeños estudiantes de Nivel de transición NT1.',
        'El RINJU es un espacio especialmente diseñado que permite a los niños y niñas jugar, desarrollar su imaginación y mostrar su forma de ver el mundo a sus padres de manera entretenida y lúdica.  El RINJU busca mejorar las condiciones de equipamiento infantil para el juego y la estimulación en hogares de los niños y niñas que forman parte de nuestros establecimientos (Escuela La Peña, Escuela Ulda Aracena, Colegio El Melón y Liceo Juan Rusque Portal).',
        'La Alcaldesa Margarita Osorio nos comentó qué, “estoy muy contenta que hayan elegido a nuestra comuna, para haber inaugurado este Rincón del Juego, que digo yo, que es para nuestros niños que lo han pasado mal. Nuestros niños son los más importante de esta Alcaldesa en nuestra comuna y con estos elementos que traen las cajas, ya van a tener con qué entretenerse”.',
        'El Seremi de Desarrollo Social mencionó que, hemos realizado la entrega de estos Rincón del Juego, que además es un elemento lúdico que nuestro Gobierno está entregando en toda la Región de Valparaíso, acá en la provincia de Quillota estamos entregando 1083 Rincones del juego, en la comuna de Nogales son 92 y acá en la Escuela La Peña 12 y eso permite que nosotros demos una enorme relevancia a la Educación Parvularia”.',
        'Así mismo el Gobernador de la Provincia Iván Cisternas nos señaló que es una muy buena noticia para los niños principalmente, este proyecto importante; son 1083 set de juegos de aprendizaje que se reparten a esa misma cantidad de familias en la Provincia de Quillota y en particular quisimos hacerlo acá con el Seremi de Desarrollo Social, la Alcaldesa Margarita Osorio y en la comuna de nogales, en el sector de la Peña, en una muy linda escuela y estoy feliz de compartir momentos con algunos niños con la distancia y con todos los resguardos necesarios.',
      ],
      'miniatura': 'entregarinju',
      'imagenesPost': ['entregarinju', 'entregarinju2', 'entregarinju3', 'entregarinju4', 'entregarinju5', 'entregarinju6', 'entregarinju7', 'entregarinju8', 'entregarinju9'],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro', 'Seremi V región, Ricardo Figueroa Ayala'],
      'audios': ['entregarinjualcaldesa', 'entregarinjuseremi'],
    },
    {
      'id': 4,
      'title': 'En Octubre se Inician trabajos de recambio de luminarias a tecnología LED para Nogales y El Melón.',
      'date': 'Septiembre 30, 2020',
      'contenido': [
        'En sesión de Concejo Municipal de este miércoles 30 de septiembre se aprobó la adjudicación del proyecto REPOSICIÓN DE LUMINARIAS PÚBLICAS DE LA COMUNA DE NOGALES, proyecto que fue postulado por el municipio y aprobado por el Gobierno Regional de Valparaíso por la suma de Mil millones de pesos, obras que se comenzarán a ejecutar en el mes de octubre.',
        'La Alcaldesa Margarita Osorio se mostró  muy contenta con la aprobación de este proyecto, ya que las nuevas luminarias permitirán brindar una mayor percepción de seguridad a los vecinos y vecinas del sector urbano de Nogales y El Melón, y de este modo hacer frente a la delincuencia.',
        'En total son 1693 luminarias que se habilitarán en la comuna, proyecto que era muy necesario para la comunidad, debido a los reclamos permanentes de los vecinos por las constantes fallas de los actuales focos en la zona urbana.',
        'La empresa que se adjudicó los trabajos es Representaciones Offersuite Chile Limitada la que tiene un plazo de 90 días para la ejecución del proyecto.',
        'La Jefa comunal precisó que la Secplac del municipio ya se encuentra trabajando en un nuevo proyecto para recambio de las luminarias LED para todo el sector rural de la comuna.',
        'Finalmente la Alcaldesa agradeció al concejo municipal por aprobar la licitación y especialmente a los dirigentes de las organizaciones funcionales y territoriales de la comuna, los que siempre la apoyaron en este proyecto desde que fueron a defenderlo a la sesión del pleno del Gobierno Regional el año pasado.',
      ],
      'miniatura': 'luminaria',
      'imagenesPost': ['luminaria'],
      'etiquetas': [],
      'audios': [],
    },
    {
      'id': 5,
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
      'id': 6,
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
      'id': 7,
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
      'id': 8,
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
