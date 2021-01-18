import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Dev } from './pages';

const Rotas = () => (
  <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/dev/:id' component={Dev}/>
  </Switch>
);

export default Rotas;