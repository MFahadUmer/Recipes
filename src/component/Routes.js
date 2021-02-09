import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import FoodDetails from './FoodDetails';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AppContainer} />
        <Route exact path="/foodDetails/" component={FoodDetails} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
