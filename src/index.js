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
      'title': 'En el primer semestre del próximo año entregarán 189 viviendas sociales en Nogales',
      'subTitle': '',
      'date': 'Junio 10, 2020',
      'contenido': [
        'Un 20 % de avance en su construcción lleva el conjunto habitacional que beneficiará a los socios y socias de los comités de allegados Los Jardines y San Juan de Dios de la comuna de Nogales, obra ejecutada por el Ministerio de Vivienda y que permitirá a 189 familias contar con una casa propia, las que serán entregadas a mediados del próximo año.',
        'La obra fue visitada por la Alcaldesa Margarita Osorio, junto al Jefe provincial de Serviu Johnny Piraino y las directivas de los comités, con el objeto de mostrarles la casa piloto, proyecto que fue posible gracias al subsidio habitacional del programa Fondo Solidario de elección de vivienda, otorgado por el Ministerio de Vivienda y Urbanismo.',
        '“Estoy muy contenta por las familias por cumplir luego el sueño de la casa propia y mi compromiso es seguir apoyando a todos los comités de allegados de nuestra”, dijo la Alcaldesa.',
        'Importante es mencionar que el terreno se encuentra emplazado a un costado de la Ruta Nogales – Puchuncaví y que desde que asumió la Alcaldesa Margarita Osorio, la autoridad realizó un trabajo codo a codo con los dirigentes y así conseguir las aprobaciones correspondientes para iniciar el anhelado proyecto de casas de 47,5 metros cuadrados en dos niveles.',
        'Johnny Piraino, Jefe Provincial de Serviu precisó que los vecinos llevaban más de diez años esperando su vivienda y que por motivos de la pandemia solo se invitó a los dirigentes a conocer las casas.',
        'La Alcaldesa Margarita Osorio dijo que seguirá apoyando a todos los comités de vivienda de la comuna de Nogales y El Melón, con el objeto que todos los vecinos puedan optar a una casa propia y así disminuir la situación de pago de arriendo o de allegados.',
      ],
      'miniatura': 'viviendas',
      'imagenesPost': ['viviendas', 'viviendas2'],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro', 'Jefe Provincial de Serviu Johnny Piraino Meneses'],
      'audios': ['ViviendasAlcaldesa', 'viviendasPiraino'],
    },
    {
      'id': 2,
      'title': 'Sopraval entrega 645 cajas de alimentos a la comuna de Nogales',
      'subTitle': '',
      'date': 'Junio 06, 2020',
      'contenido': [
        'Esta semana la empresa anunció la entrega de más de 4mil cajas de alimentos para comunas dela región de Valparaíso. La comuna de La Calera fue la primera en recibir el aporte de la empresa y este miércoles fue el turno de la comuna de Nogales.',
        '“Sopraval siempre ha sido una empresa que ha estado presente en la comunidad sobre todo ahora que estamos viviendo una pandemia dura y difícil. Estamos muy orgullosos y con gusto y cariño estamos haciendo entrega de 645 cajas de mercadería enfocadas en los adultos mayores quienes son los más vulnerables y a quienes queremos apoyar para que se cuiden y no salgan de sus casas” Lucas Lizarralde, Gerente Producción de Sopraval.',
        'Por su parte la Alcaldesa de la comuna de Nogales, Margarita Osorio, agradeció el aporte que beneficiará a las familias que más lo necesitan, “Contenta en especial por el apoyo que siempre nos ha dado la empresa Sopraval, no solamente en esta pandemia. Son momentos difíciles que estamos viviendo, pero nos hemos esforzado para estar cien por ciento con los vecinos de la comuna de Nogales y El Melón”.',
        'Las cajas de mercadería están orientadas a familias vulnerables de la comuna, en especial a adultos mayores y la entrega se desarrollará de manera gradual por parte del municipio.',
        'La distribución de las cajas de mercadería continuará este viernes en la comuna de Hijuelas y posteriormente en las otras comunas donde Sopraval ha comprometido el aporte.',
      ],
      'miniatura': 'sopraval',
      'imagenesPost': ['sopraval'],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro', 'Gerente Producción de Sopraval, Lucas Lizarralde'],
      'audios': ['SopravalCajasAlcaldesa', 'SopravalCajasLucas'],
    },
    {
      'id': 3,
      'title': 'Con aportes propios municipio entrega mercadería a familias afectadas por el Covid-19',
      'subTitle': '',
      'date': 'Junio 08, 2020',
      'contenido': [
        'Un total de mil cajas de mercadería están siendo entregadas por la Alcaldesa Margarita Osorio y los funcionarios Municipales a las familias que se han visto afectadas debido a la pandemia de Covid 19, aporte que es financiado con recursos municipales y que serán distribuidas a los vecinos de Nogales, El Melón y zonas rurales, en sus respetivas unidades vecinales.',
        'El objetivo es ayudar a las personas que atraviesan por un mal momento económico producto por los efectos de la corona virus, especialmente los adultos mayores, personas que han perdido sus empleos o simplemente aquellos que tienen trabajos ocasionales y que han visto limitados sus ingresos.',
        'Lo singular de esta ayuda es que las personas beneficiadas fueron seleccionadas con la participación de los dirigentes de las Juntas de Vecinos, los que pesquisaron los casos en cada unidad vecinal y entregaron el listado a la Municipalidad.',
        'Benito Espinoza Castillo Presidente de la Junta de Vecinos Ramón Freire de El Melón, precisó que ha sido una buena medida de la Alcaldesa ya que cuando comenzó la pandemia ella les pidió que identificaran a las familias que se podrían ver afectadas por la crisis sanitaria.',
        'La Alcaldesa Margarita Osorio indicó que esta es la primera ayuda que entrega el municipio y que después vendrán las cajas que entregará el gobierno y las que aportará la empresa privada de la zona, con el objeto que la mayor cantidad de personas pueda acceder a estos alimentos.',
        'Finalmente cabe precisar que debido a la pandemia el Municipio de Nogales sigue sanizando la comuna y que recientemente recibió la donación de dos pulverizadoras de Anglo American; y que un médico del Departamento de Salud sigue desarrollando visitas domiciliarias a los adultos mayores y pacientes postrados de Nogales y El Melón.',
      ],
      'miniatura': 'aportepropio',
      'imagenesPost': ['aportepropio'],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro', 'Pdte. JJ.VV. Ramón Freire, Benito Espinoza Castillo'],
      'audios': ['aportesPropiosAlcaldesa', 'aportesPropiosBenito'],
    },
    {
      'id': 4,
      'title': 'Municipio realiza “Censo Comunal” para detectar casos que no han recibido ayuda social',
      'subTitle': '- Iniciativa beneficiará directamente a la clase media y personas que no reciben ayuda social por alto puntaje en Ficha de protección Social',
      'date': 'Julio 11, 2020',
      'contenido': [
        'En este periodo de pandemia han sido muchas las familias que han recibido ayuda social de parte del municipio, gobierno y donaciones de la empresa privada. En el caso de Nogales, la Alcaldesa Margarita Osorio ha entregado con recursos municipales cajas de mercadería y kit de aseo personal para enfrentar de mejor manera esta crisis.',
        'Sin embargo, han sido muchas las personas que se han quejado que “siempre son las mismas personas las que se benefician con este tipo de aportes”, razón por la cual la Alcaldesa Margarita Osorio comenzó a ejecutar un “Censo Comunal” con el objetivo de encuestar a los vecinos de toda la comuna y obtener información acerca de la situación que atraviesan producto de esta pandemia',
        'Este jueves un equipo liderado por personal del Departamento de Educación y funcionarios del Municipio comenzó a recopilar antecedentes de los sectores de Villa Disputada, Cemento Melón y Macal en el distrito de El Melón y en los próximos días se abordará el resto de los sectores.',
        'Los más de veinte funcionarios tienen como misión consultar acerca de la situación que atraviesan las familias, con el objeto de pesquisar aquellos casos en que las personas requieren con urgencia ayuda, y -sin embargo- son las que pocas veces o nunca piden ayuda a la municipalidad.',
        'La Alcaldesa Margarita Osorio, indicó que la idea es que la mayor cantidad de personas puedan recibir la ayuda que entrega el gobierno y la municipalidad, y de este modo tener una estadística real y beneficiar también a las personas que tienen puntajes altos en la ficha protección social, pero que –por ahora-atraviesan por un mal momento económico.',
        'Durante los próximos días los encuestadores tendrán como misión entregar esta información a la Alcaldía y así comenzar el proceso de distribución de ayuda de manera más equitativa posible; aunque ya en la primera jornada quedó reflejada la situación de abandono en que viven muchos adultos mayores.',
        'Junto con ello el municipio también indicó que con recursos del Gobierno se hará entrega de vales de recarga de gas de 15 kilos para las familias más vulnerables de la comuna, proceso que se desarrollará a través de la Dirección de Desarrollo Comunitario.',
      ],
      'miniatura': 'censocomunal',
      'imagenesPost': ['censocomunal'],
      'etiquetas': ['Alcaldesa Nogales, Margarita Osorio Pizarro'],
      'audios': ['censoComunalAlcaldesa'],
    },
    {
      'id': 5,
      'title': 'Municipio otorga facilidades de pago de patentes a los comerciantes producto de la pandemia',
      'subTitle': '',
      'date': 'Julio 23, 2020',
      'contenido': [
        'El periodo de pandemia ha significado una gran baja en las ventas de los comerciantes locales de la comuna de Nogales y El Melón. La disminución de los ingresos de los vecinos y la pérdida del empleo han gatillado un gran problema para los propietarios de los almacenes y comercio en general, los que legalmente tienen hasta el 31 de Julio para pagar su patente.',
        'Es por esta razón que la Alcaldesa Margarita Osorio –con las facultades que le otorga la ley- quiso dar una ayuda a este rubro que también es una importante fuente de empleo en la comuna y presentó una modificación que fue aprobada por el Concejo Municipal, consistente en tres alternativas de pago de las patentes comerciales, industriales y de alcohol destinada a las micro, pequeñas y medianas empresas.',
        'De este modo, los comerciantes podrán tener las siguientes opciones: Primero, pago de forma normal hasta 31 julio; segundo, postergación en 3 meses del pago de la patente del mes de julio 2020, sin intereses ni multas y pago con vencimiento el 31 de octubre 2020.',
        'Y finalmente el pago de la patente en 6 cuotas iguales, sin intereses ni multas a diciembre de 2020.',
        'Los contribuyentes interesados en acceder a esta flexibilidad de pago deben retirar el formulario en la oficina de partes del municipio ubicada en el edificio municipal y de ahí serán derivados a la Unidad de Rentas.',
        'El Asesor Jurídico Municipal, Abogado Alejandro Borbarán precisó que la opción elegida dependerá de las necesidades o situación en la que se encuentre cada uno de los comerciantes pero que es importante dejar en claro que es sin multas e intereses.',
        'Importante es mencionar que de este beneficio queda excluida el pago de las patentes profesionales, pero sin lugar a dudas es un gran alivio para el comercio establecido de la comuna de Nogales y El Melón.',
      ],
      'miniatura': 'facilidad',
      'imagenesPost': ['facilidad'],
      'etiquetas': ['Asesor Jurídico, Alejandro Borbarán Ferández'],
      'audios': ['patentesBorbaran'],
    },
    {
      'id': 6,
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
      'id': 7,
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
      'id': 8,
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
