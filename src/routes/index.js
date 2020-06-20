import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home';
import HeroDetails from '../pages/HeroDetails';
import EditHero from '../pages/EditHero';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" exact component={HeroDetails} />
      <Route path="/edit/:id" exact component={EditHero} />

    </Switch>
  );
}
