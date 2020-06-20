import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home';
import HeroDetais from '../pages/HeroDetails'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" exact component={HeroDetais} />

    </Switch>
  );
}
