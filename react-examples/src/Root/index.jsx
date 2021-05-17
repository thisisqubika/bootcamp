import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../Home';
import { Interval } from '../Interval';
import { Navbar } from '../Navbar'

export const Root = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/interval">
          <Interval />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
