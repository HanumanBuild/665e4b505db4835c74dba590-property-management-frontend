
// src/lib/routes.js

// This file defines the routes for the application. It sets up the routing for the Home and
// PropertyDetails pages using React Router.

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/property/:id" component={PropertyDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;
