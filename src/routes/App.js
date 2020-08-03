import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../components/Layout';
import MisionVisionCont from '../containers/MisionVisionCont';
import JuzgadoPoliciaLocal from '../containers/JuzgadoPoliciaLocal';
import AlcaldiaCont from '../containers/AlcaldiaCont';
import ConsejoMunicipal from '../containers/ConsejoMunicipal';
import Escalafon from '../containers/Escalafon';
import CuentaPublica from '../containers/CuentaPublica';
import ComunaContainer from '../containers/ComunaContainer';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/vision' component={MisionVisionCont} />
        <Route exact path='/alcaldia' component={AlcaldiaCont} />
        <Route exact path='/consejales' component={ConsejoMunicipal} />
        <Route exact path='/escalafon' component={Escalafon} />
        <Route exact path='/cuentapublica' component={CuentaPublica} />
        <Route exact path='/historia' component={ComunaContainer} />
        <Route exact path='/juzgado' component={JuzgadoPoliciaLocal} />

      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
