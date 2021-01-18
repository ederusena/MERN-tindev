import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './pages';

const Rotas = () => (
  <Switch>
    <Route exact path='/' component={Login}/>
  </Switch>
);

export default Rotas;