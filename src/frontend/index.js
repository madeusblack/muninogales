import React from 'react';
import ReactDOM from 'react-dom';
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
      'title': 'Municipio recibió 3 nuevos camiones aljibe del Gobierno Regional de Valparaíso',
      'subTitle': '- Inversión es de 289 millones de pesos y permitirá agilizar la entrega de agua potable en sector urbano y rural de la comuna.',
      'date': 'Junio 04, 2020',
      'Contenido': `En una ceremonia desarrollada en el frontis de la Intendencia Regional de Valparaíso, la Alcaldesa Margarita Osorio recibió tres nuevos camiones aljibe por parte del Intendente Jorge Martínez, en compañía de la Diputada Camila Flores, el Presidente del Consejo Regional Manuel Murillo, el Core Percy Marín y los equipos técnicos del Gobierno Regional. La Municipalidad de Nogales fue la única en recibir tres camiones. Uno de ellos tiene una capacidad de almacenamiento de 15 mil y los otros dos de 10 mil litros del vital elemento, implementados para el reparto de agua para consumo humano en el sector urbano y rural de toda la comuna.
        Importante es mencionar que debido a la catástrofe hídrica que sufre la zona, la comuna de Nogales es una de las más golpeadas de la región y actualmente el municipio contaba con dos antiguos camiones que serán renovados por estas tres flamantes adquisiciones. Y para hacer frente a la sequía se cuenta con el apoyo en el suministro de agua a los estanques acumuladores de la red municipal de El Melón por parte de la Gobernación de Quillota y de la empresa Anglo American.      
        El Intendente Jorge Martínez precisó que este es un compromiso del Gobierno Regional y de los consejeros para dotar de agua potable a las comunas más afectadas y “queremos que a nadie le falte agua, especialmente en este periodo de pandemia”.
        La Alcaldesa Margarita Osorio dijo estar muy agradecida del Intendente, de la Diputada Camila Flores, del presidente del Core Manuel Murillo, y del Consejero Regional Percy Marín por la llegada de estos tres camiones que facilitarán la entrega de agua potable en esta grave sequía.
        Por su parte la Diputada Camila Flores precisó que esta es una ayuda súper importante para Nogales y El Melón porque “sabemos de la crisis hídrica que vive la comuna y que estos camiones permitirá llegar a un mayor número de sectores”, dijo.
        Para el presidente del Consejo Regional, Manuel Murillo, la entrega de estos camiones es un hecho histórico, ya que para la región se han comprado sesenta camiones con una inversión de más de 6 mil millones de pesos.
        Percy Marín, Presidente de la Comisión de Inversiones del Gobierno Regional agradeció el trabajo que ha realizado la alcaldesa y en ese sentido se han entregado a Nogales 3 camiones aljibe, lo que la convierte en una de las comunas más beneficiadas de la región.
        Tras la ceremonia en la Capital Regional, la Alcaldesa Margarita Osorio se dirigió al distrito de El Melón para mostrar los tres nuevos camiones a la comunidad, la que es beneficiada con la entrega de agua por los funcionarios municipales todos los días de la semana.`,
      'miniatura': 'aljibes.jpg',
      'imagenesPost': ['aljibes.jpg'],
      'audios': ['https://mdstrm.com/video/58333e214ad055d208427db5.mp4'],
    },
    {
      'id': 2,
      'title': 'Municipio entrega kit de aseo personal a las mamás como medida preventiva de Covid-19',
      'subTitle': '- Se repartirán cinco mil kit con inversión municipal superior a los 17 millones de pesos',
      'date': 'Junio 08, 2020',
      'Contenido': `En manos de la Alcaldesa Margarita Osorio y con el apoyo de los funcionarios municipales comenzó la entrega de los kit de aseo personal para las mamás de la comuna, labor que se inició la semana pasada y que tiene como objetivo facilitar elementos de aseo personal como jabón, shampoo y cremas, como una medida más para prevenir el contagio de covid-19 en la comuna.
        Casa por casa la Jefa comunal ha desarrollado esta donación y ya han sido beneficiados sectores como la población La Unión, Juanita Fernández, Los Cáñamos y Nuevo Amanecer en el distrito de El Melón; mientras que en Nogales ya se ha repartido el kit en El Polígono, La Peña, Población El Cristo y Los Almendros.
        Para la Alcaldesa Margarita Osorio esta entrega es un gran esfuerzo que hace el municipio para prevenir el corona virus, ya que se hace con recursos municipales por un monto de 17 millones 500 mil pesos, sumado a las medidas de sanitización de calles y visitas domiciliarias por parte de personal médico a los adultos mayores y pacientes postrados.
        La Jefa Comunal llamó a la comunidad que aún no recibe el kit a estar tranquilos ya que se entregará por todos los sectores, con el apoyo de los funcionarios municipales, quienes además están en el proceso de entrega de las mil cajas de mercadería que adquirió el municipio con recursos propios; y ahora las donadas por Sopraval y las del Gobierno que llegaron el sábado al gimnasio municipal de Nogales.`,
      'miniatura': 'kitaseocovid.jpg',
      'imagenesPost': ['kitaseocovid.jpg'],
      'audios': ['https://mdstrm.com/video/58333e214ad055d208427db5.mp4'],
    },
    {
      'id': 3,
      'title': 'En el primer semestre del próximo año entregarán 189 viviendas sociales en Nogales',
      'subTitle': '',
      'date': 'Junio 10, 2020',
      'Contenido': `Un 20 % de avance en su construcción lleva el conjunto habitacional que beneficiará a los socios y socias de los comités de allegados Los Jardines y San Juan de Dios de la comuna de Nogales, obra ejecutada por el Ministerio de Vivienda y que permitirá a 189 familias contar con una casa propia, las que serán entregadas a mediados del próximo año.
      La obra fue visitada por la Alcaldesa Margarita Osorio, junto al Jefe provincial de Serviu Johnny Piraino y las directivas de los comités, con el objeto de mostrarles la casa piloto, proyecto que fue posible gracias al subsidio habitacional del programa Fondo Solidario de elección de vivienda, otorgado por el Ministerio de Vivienda y Urbanismo.
      “Estoy muy contenta por las familias por cumplir luego el sueño de la casa propia y mi compromiso es seguir apoyando a todos los comités de allegados de nuestra”, dijo la Alcaldesa.
      Importante es mencionar que el terreno se encuentra emplazado a un costado de la Ruta Nogales – Puchuncaví y que desde que asumió la Alcaldesa Margarita Osorio, la autoridad realizó un trabajo codo a codo con los dirigentes y así conseguir las aprobaciones correspondientes para iniciar el anhelado proyecto de casas de 47,5 metros cuadrados en dos niveles.
      Johnny Piraino, Jefe Provincial de Serviu precisó que los vecinos llevaban más de diez años esperando su vivienda y que por motivos de la pandemia solo se invitó a los dirigentes a conocer las casas.
      La Alcaldesa Margarita Osorio dijo que seguirá apoyando a todos los comités de vivienda de la comuna de Nogales y El Melón, con el objeto que todos los vecinos puedan optar a una casa propia y así disminuir la situación de pago de arriendo o de allegados.`,
      'miniatura': 'viviendas.jpg',
      'imagenesPost': ['viviendas.jpg', 'viviendas2.jpg'],
      'audios': ['https://mdstrm.com/video/58333e214ad055d208427db5.mp4'],
    },
    {
      'id': 4,
      'title': 'Sopraval entrega 645 cajas de alimentos a la comuna de Nogales',
      'subTitle': '',
      'date': 'Junio 06, 2020',
      'Contenido': `Esta semana la empresa anunció la entrega de más de 4mil cajas de alimentos para comunas dela región de Valparaíso. La comuna de La Calera fue la primera en recibir el aporte de la empresa y este miércoles fue el turno de la comuna de Nogales.
      “Sopraval siempre ha sido una empresa que ha estado presente en la comunidad sobre todo ahora que estamos viviendo una pandemia dura y difícil. Estamos muy orgullosos y con gusto y cariño estamos haciendo entrega de 645 cajas de mercadería enfocadas en los adultos mayores quienes son los más vulnerables y a quienes queremos apoyar para que se cuiden y no salgan de sus casas” Lucas Lizarralde, Gerente Producción de Sopraval.
      Por su parte la Alcaldesa de la comuna de Nogales, Margarita Osorio, agradeció el aporte que beneficiará a las familias que más lo necesitan, “Contenta en especial por el apoyo que siempre nos ha dado la empresa Sopraval, no solamente en esta pandemia. Son momentos difíciles que estamos viviendo, pero nos hemos esforzado para estar cien por ciento con los vecinos de la comuna de Nogales y El Melón”.
      Las cajas de mercadería están orientadas a familias vulnerables de la comuna, en especial a adultos mayores y la entrega se desarrollará de manera gradual por parte del municipio.
      La distribución de las cajas de mercadería continuará este viernes en la comuna de Hijuelas y posteriormente en las otras comunas donde Sopraval ha comprometido el aporte.`,
      'miniatura': 'sopraval.jpg',
      'imagenesPost': ['sopraval.jpg'],
      'audios': ['https://mdstrm.com/video/58333e214ad055d208427db5.mp4'],
    },
    {
      'id': 5,
      'title': 'Con aportes propios municipio entrega mercadería a familias afectadas por el Covid-19',
      'subTitle': '',
      'date': 'Junio 08, 2020',
      'Contenido': `Un total de mil cajas de mercadería están siendo entregadas por la Alcaldesa Margarita Osorio y los funcionarios Municipales a las familias que se han visto afectadas debido a la pandemia de Covid 19, aporte que es financiado con recursos municipales y que serán distribuidas a los vecinos de Nogales, El Melón y zonas rurales, en sus respetivas unidades vecinales.
      El objetivo es ayudar a las personas que atraviesan por un mal momento económico producto por los efectos de la corona virus, especialmente los adultos mayores, personas que han perdido sus empleos o simplemente aquellos que tienen trabajos ocasionales y que han visto limitados sus ingresos.
      Lo singular de esta ayuda es que las personas beneficiadas fueron seleccionadas con la participación de los dirigentes de las Juntas de Vecinos, los que pesquisaron los casos en cada unidad vecinal y entregaron el listado a la Municipalidad.
      Benito Espinoza Castillo Presidente de la Junta de Vecinos Ramón Freire de El Melón, precisó que ha sido una buena medida de la Alcaldesa ya que cuando comenzó la pandemia ella les pidió que identificaran a las familias que se podrían ver afectadas por la crisis sanitaria.
      La Alcaldesa Margarita Osorio indicó que esta es la primera ayuda que entrega el municipio y que después vendrán las cajas que entregará el gobierno y las que aportará la empresa privada de la zona, con el objeto que la mayor cantidad de personas pueda acceder a estos alimentos.
      Finalmente cabe precisar que debido a la pandemia el Municipio de Nogales sigue sanizando la comuna y que recientemente recibió la donación de dos pulverizadoras de Anglo American; y que un médico del Departamento de Salud sigue desarrollando visitas domiciliarias a los adultos mayores y pacientes postrados de Nogales y El Melón.`,
      'miniatura': 'aportepropio.jpg',
      'imagenesPost': ['aportepropio.jpg'],
      'audios': ['https://mdstrm.com/video/58333e214ad055d208427db5.mp4'],
    },
    {
      'id': 6,
      'title': 'Municipio realiza “Censo Comunal” para detectar casos que no han recibido ayuda social',
      'subTitle': '',
      'date': 'Julio 11, 2020',
      'Contenido': '',
      'miniatura': 'censocomunal.jpg',
      'imagenesPost': ['censocomunal.jpg'],
      'audios': ['https://mdstrm.com/video/58333e214ad055d208427db5.mp4'],
    },
    {
      'id': 7,
      'title': 'Municipio otorga facilidades de pago de patentes a los comerciantes producto de la pandemia',
      'subTitle': '',
      'date': 'Julio 23, 2020',
      'Contenido': `El periodo de pandemia ha significado una gran baja en las ventas de los comerciantes locales de la comuna de Nogales y El Melón. La disminución de los ingresos de los vecinos y la pérdida del empleo han gatillado un gran problema para los propietarios de los almacenes y comercio en general, los que legalmente tienen hasta el 31 de Julio para pagar su patente.
      Es por esta razón que la Alcaldesa Margarita Osorio –con las facultades que le otorga la ley- quiso dar una ayuda a este rubro que también es una importante fuente de empleo en la comuna y presentó una modificación que fue aprobada por el Concejo Municipal, consistente en tres alternativas de pago de las patentes comerciales, industriales y de alcohol destinada a las micro, pequeñas y medianas empresas.
      De este modo, los comerciantes podrán tener las siguientes opciones: Primero, pago de forma normal hasta 31 julio; segundo, postergación en 3 meses del pago de la patente del mes de julio 2020, sin intereses ni multas y pago con vencimiento el 31 de octubre 2020.
      Y finalmente el pago de la patente en 6 cuotas iguales, sin intereses ni multas a diciembre de 2020.
      Los contribuyentes interesados en acceder a esta flexibilidad de pago deben retirar el formulario en la oficina de partes del municipio ubicada en el edificio municipal y de ahí serán derivados a la Unidad de Rentas.
      El Asesor Jurídico Municipal, Abogado Alejandro Borbarán precisó que la opción elegida dependerá de las necesidades o situación en la que se encuentre cada uno de los comerciantes pero que es importante dejar en claro que es sin multas e intereses.
      Importante es mencionar que de este beneficio queda excluida el pago de las patentes profesionales, pero sin lugar a dudas es un gran alivio para el comercio establecido de la comuna de Nogales y El Melón.`,
      'miniatura': 'facilidad.jpg',
      'imagenesPost': ['facilidad.jpg'],
      'audios': ['https://mdstrm.com/video/58333e214ad055d208427db5.mp4'],
    },
    {
      'id': 8,
      'title': 'Primera Intervención Urbana Prevención covid 19 y derechos de las niñas y niños',
      'subTitle': '',
      'date': 'Agosto 10, 2020',
      'Contenido': `Más de ocho mil menores disfrutaron del día del niño y niña en la comuna de Nogales

      Casa por casa y con la entrega de dulces y golosinas, además de entrega de folletos preventivos por el covid 19, se desarrolló desde el pasado jueves hasta ayer domingo la celebración del día del niño y la niña en la comuna. 
      
       A pesar de la pandemia,  la alcaldesa Margarita Osorio quiso entregar un momento de recreación y esparcimiento a los niños que  han permanecido en sus casas producto de la contingencia sanitaria ; y a través de una comparsa con payasos y animaciones infantiles se recorrió todos los sectores urbanos de Nogales y El Melón.
      
      La caravana liderada por la propia jefa comunal con el apoyo de los funcionarios municipales y del departamento de educación, permitió a los menores disfrutar de un momento de alegría junto a sus familias.
      
      Junto con los dulces y golosinas se hizo entrega de material preventivo por medio de afiches, mascarillas y cada funcionario hizo entrega de estos implementos con la previa y necesaria aplicación de alcohol a cada menor.
      
      La jefa comunal dijo sentirse muy satisfecha con la celebración del día del niño, ya que los menores llevan meses en sus casas sin poder jugar y solo se entretienen viendo TV y por celular. 
      
      " Yo como alcaldesa nunca me he olvidado de los niños y adultos mayores, por eso celebramos de manera diferente y fue una maratónica jornada dónde caminamos muchos kilómetros para ir puerta a puerta, casa por casa entregando alegría a los niños y niñas, especialmente a los más pequeños".
      
      La jornada finalizó ayer en la población Juanita Fernández de El Melón y en total se entregaron más de 8 mil bolsas de dulces y dos mil mascarillas, y se utilizaron nos de veinte litros de alcohol.`,
      'miniatura': 'intervencion1.jpeg',
      'imagenesPost': ['intervencion1.jpeg', 'intervencion2.jpeg', 'intervencion3.jpeg', 'intervencion4.jpeg'],
      'audios': ['https://mdstrm.com/video/58333e214ad055d208427db5.mp4'],
    },
  ],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
