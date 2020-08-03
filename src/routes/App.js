import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../components/Layout';
import MisionVisionCont from '../containers/MisionVisionCont';
import JuzgadoPoliciaLocal from '../containers/JuzgadoPoliciaLocal';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/vision' component={MisionVisionCont} />
        <Route exact path='/juzgado' component={JuzgadoPoliciaLocal} />

      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
