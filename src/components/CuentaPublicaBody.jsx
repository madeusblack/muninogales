import React from 'react';
import escalafon from '../assets/static/pdf/municipalidad/escalafon.pdf';
import pdfImg from '../assets/static/pdf.gif';
import Cuenta from '../assets/static/cuenta1.jpg';

const CuentaPublicaBody = () => (
  <div className='mainEscalafon'>
    <h1>Cuenta Publica</h1>
    <img src={Cuenta} alt=""/>

    <p>
      Apreciados vecinas y vecinos,
      Mediante la Cuenta de Gestión de la Municipalidad de Nogales, se muestra cómo la visión de futuro del municipio se transforma en acciones específicas, en programas y proyectos que dan como resultado obras que benefician a los habitantes de la comuna. En un contexto donde está presente nuestra identidad, se reconocen las raíces y se manifiesta la diversidad en el quehacer del municipio.
      Los invito a revisar estas cuentas de gestión, que muestra en detalle las obras, programas y actividades.
      Atentamente,
      Margarita Osorio Pizarro
      Alcaldesa
      Municipalidad de Nogales
    </p>
    <div>
      <div>
        <a name='2019' href={escalafon}><img src={pdfImg} alt='' /><label htmlFor="2019">2019</label></a>
        <a name='2018' href={escalafon}><img src={pdfImg} alt='' /><label htmlFor="2018">2018</label></a>
        <a name='2017' href={escalafon}><img src={pdfImg} alt='' /><label htmlFor="2017">2017</label></a>
        <a name='2016' href={escalafon}><img src={pdfImg} alt='' /><label htmlFor="2016">2016</label></a>
      </div>
      <div>
        <a name='2015' href={escalafon}><img src={pdfImg} alt='' /><label htmlFor="2015">2015</label></a>
        <a name='2014' href={escalafon}><img src={pdfImg} alt='' /><label htmlFor="2014">2014</label></a>
        <a name='2013' href={escalafon}><img src={pdfImg} alt='' /><label htmlFor="2013">2013</label></a>
        <a name='2012' href={escalafon}><img src={pdfImg} alt='' /><label htmlFor="2012">2012</label></a>
      </div>
      <div>
        <a name='2011' href={escalafon}><img src={pdfImg} alt='' /><label htmlFor="2011">2011</label></a>
      </div>

    </div>
  </div>
);
export default CuentaPublicaBody;
