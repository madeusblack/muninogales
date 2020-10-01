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
      'title': 'Primera Intervención Urbana Prevención covid 19 y derechos de las niñas y niños',
      'subTitle': 'Más de ocho mil menores disfrutaron del día del niño y niña en la comuna de Nogales',
      'date': 'Agosto 10, 2020',
      'contenido': [
        'Casa por casa y con la entrega de dulces y golosinas, además de entrega de folletos preventivos por el covid 19, se desarrolló desde el pasado jueves hasta ayer domingo la celebración del día del niño y la niña en la comuna. ',
        'A pesar de la pandemia,  la alcaldesa Margarita Osorio quiso entregar un momento de recreación y esparcimiento a los niños que  han permanecido en sus casas producto de la contingencia sanitaria ; y a través de una comparsa con payasos y animaciones infantiles se recorrió todos los sectores urbanos de Nogales y El Melón.',
        'La caravana liderada por la propia jefa comunal con el apoyo de los funcionarios municipales y del departamento de educación, permitió a los menores disfrutar de un momento de alegría junto a sus familias.',
        'Junto con los dulces y golosinas se hizo entrega de material preventivo por medio de afiches, mascarillas y cada funcionario hizo entrega de estos implementos con la previa y necesaria aplicación de alcohol a cada menor.',
        'La jefa comunal dijo sentirse muy satisfecha con la celebración del día del niño, ya que los menores llevan meses en sus casas sin poder jugar y solo se entretienen viendo TV y por celular. ',
        '" Yo como alcaldesa nunca me he olvidado de los niños y adultos mayores, por eso celebramos de manera diferente y fue una maratónica jornada dónde caminamos muchos kilómetros para ir puerta a puerta, casa por casa entregando alegría a los niños y niñas, especialmente a los más pequeños".',
        'La jornada finalizó ayer en la población Juanita Fernández de El Melón y en total se entregaron más de 8 mil bolsas de dulces y dos mil mascarillas, y se utilizaron nos de veinte litros de alcohol.'],
      'miniatura': 'intervencion1',
      'imagenesPost': ['intervencion1', 'intervencion2', 'intervencion3', 'intervencion4'],
      'etiquetas': [''],
      'audios': [''],
    },
    {
      'id': 2,
      'title': 'Municipalidad realiza intervención cultural y entrega de cinco mil kit de alimentos no perecibles para adultos mayores',
      'date': 'Septiembre 1, 2020',
      'contenido': [
        'De una manera muy diferente a las actividades desarrolladas en años anteriores relacionadas con “Pasamos Agosto” y producto de la pandemia, la Municipalidad de Nogales ideó una inédita iniciativa para conmemorar esta importante fecha, con la realización de una intervención cultural comunitaria dirigida a este grupo de la población que se ha visto seriamente afectada por el covid 19 y la que contempla la entrega de insumos básicos de alimentación para los adultos mayores.',
        'La intervención cultural nació tras petición de la propia directiva de la Unión Comunal de Adultos Mayores, las que pidieron a la Jefa Comunal, que a pesar del coronavirus, era necesario una actividad con música, color y entrega de alimentos complementarios, tal como se desarrolló la celebración del Día del Niño y Niña a mediados de agosto.',
        'La actividad comenzó hoy martes y contempla un recorrido casa por casa en los sectores urbanos de toda la comuna de Nogales y El Melón, ocasión donde artistas de la zona a bordo de un escenario móvil y recreando la década de los años sesenta, llevarán un poco de música, entretenimiento y alegría a este grupo de vecinos.',
        'Para recorrer la comuna se trabajará en tres equipos, con el apoyo de funcionarios Municipales, Salud y Departamento de Educación, los que serán los encargados de entregar un kit de alimentos complementarios no perecibles, tales como galletas soda, atún, mermeladas, postres en conserva, avena y gelatina, por nombrar algunas.',
        'En total el municipio nogalino adquirió cinco mil kit y durante la primera jornada se contempló la entrega de esta ayuda social a los adultos mayores de la Fundación Las Rosas de Nogales, punto de partida de esta especial celebración, los que disfrutaron de un entretenido evento musical.',
        'La Alcaldesa Margarita Osorio explicó que han sido muchos los adultos mayores de la comuna que han presentado problemas sicológicos producto del encierro por el corona virus y que como medida sanitaria se irá casa por casa entregando la ayuda social junto con la entretención.',
        'Por su parte, la Directora Técnica de la Fundación Las Rosas en Nogales, Claudia López y la Directora Religiosa, la Hermana Guadalupe, valoraron la iniciativa porque no ha sido fácil sobrellevar la pandemia en este centro de acogida.',
        'Y desde este momento y por varios días, las tres caravanas municipales iniciarán su recorrido por todos los sectores de Nogales y El Melón, realizando un llamado para que los adultos mayores permanezcan en sus respectivos domicilios.',
      ],
      'miniatura': 'pasamosagostomini',
      'imagenesPost': ['pasamosagosto1', 'pasamosagosto2', 'pasamosagosto3', 'pasamosagosto4', 'pasamosagosto5'],
      'etiquetas': [''],
      'audios': [''],
    },
    {
      'id': 3,
      'title': 'Municipio entrega 1194 chip con internet para todos los estudiantes y tablets en comodato a estudiantes de cuarto medio de Liceo Juan Rusque y Colegio El Melón',
      'date': 'Septiembre 9, 2020',
      'contenido': [
        'La Alcaldesa Margarita Osorio junto al Director del Departamento de Educación municipal de Nogales Hernán Alarcón Fernández, realizaron la entrega de 62 Tablet para los estudiantes que están cursando cuarto año medio en el Liceo Juan Rusque Portal y en el Colegio El Melón.',
        'De esta manera, este miércoles 09 de septiembre, se inició la entrega de las Tablet con todos protocolos y medidas de seguridad para los apoderados y estudiantes que asistieron a sus respectivos establecimientos.',
        'Cabe destacar que esta iniciativa fue gestionada por la administración central del Daem junto a la Alcaldesa y los Directores de los establecimientos municipales de la comuna, para asegurar la continuidad en la entrega del material educativo y acortar la brecha digital entre los estudiantes municipales.',
        'Es importante mencionar que dentro de los próximos días todos los estudiantes de las cuatro escuelas (Escuela La Peña, Escuela Ulda Aracena, Colegio El Melón y Liceo Juan Rusque Portal), se les hará la entrega de internet inalámbrico (chip), que consiste en 60 gigas por cuatro meses, en el marco de la emergencia por el Covid-19.',
        'La Alcaldesa Margarita Osorio, indicó que “me parece muy bueno, a pesar que ya estamos en los primeros días del mes de septiembre y uno quisiera que los niños hubieran regresado a clases, pero ahora yo no estoy de acuerdo con su regreso. Espero que el próximo año lleguemos con más fuerza y que se encuentre realmente la vacuna para este virus.',
        'Así mismo, Hernán Alarcón Director del Daem, nos comentó qué, “esta iniciativa tiene origen en la falta de conectividad y acceso a internet que presentan los estudiantes de la educación municipalizada, en especial los alumnos que se preparan para la prueba de transición y acceso a la Educación Superior”.',
        '“Sabemos de las necesidades de las familias de nuestros estudiantes, los cuales no cuentan con loes elementos tecnológicos para acceder al material educativo preparado por cada establecimiento; es por esta razón que se ha accedido invertir en chip con conexión a internet el 100% de nuestros estudiantes”, precisó Alarcón.”',
        'Cabe destacar que la inversión en la compra de Tablet ITAB asciende a $7.688.526 millones y los 1.194 Chip de internet móvil de Entel que vienen con 60 gigas de navegación mensual y que se compraron para todos los estudiantes desde primero básico a cuarto medio, asciende 11.000 pesos el plan mensual.',
      ],
      'miniatura': 'entregachips',
      'imagenesPost': ['entregachips', 'entregachips2'],
      'etiquetas': [''],
      'audios': [''],
    },
    {
      'id': 4,
      'title': 'Municipio comenzó entrega de cajas de mercadería y sacos de papas para los vecinos de la comuna',
      'date': 'Septiembre 14, 2020',
      'contenido': [
        'Desde el pasado sábado y durante esta semana, la Alcaldesa Margarita Osorio junto a los funcionarios Municipales, Salud y Educación comenzaron con la entrega de cajas de mercadería y un saco de papas para todas las familias de la comuna de Nogales y El Melón, que se han visto afectadas por la pandemia del Covid 19.',
        'Las cajas de mercadería y los siete mil sacos de papas fueron adquiridos por el municipio con recursos del gobierno, y antes de la entrega los funcionarios realizaron la inscripción y posteriormente el equipo operativo procede a la entrega de estos productos alimenticios.',
        'Para la Alcaldesa Margarita Osorio, la entrega de este tipo de ayuda social viene a responder a las necesidades que ha planteado la comunidad, la que se ha visto muy afectada por la pandemia, principalmente por la disminución de ingresos.',
        'De esta manera, y durante estos días los funcionarios municipales y la Jefa comunal siguen con la entrega de estos productos de primera necesidad, con el objeto que los vecinos puedan contar con estos alimentos antes de las fiestas patrias.',
        'Importante es mencionar que la decisión de realizar la entrega casa por casa, tiene como objetivo evitar aglomeraciones en los sectores vecinales, evitando los contagios de Covid 19. ',
      ],
      'miniatura': 'entregapapasmini',
      'imagenesPost': ['entregapapas'],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro'],
      'audios': ['entregapapasalcaldesa'],
    },
    {
      'id': 5,
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
      'id': 6,
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
      'id': 7,
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
      'id': 8,
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
