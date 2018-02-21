import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteComponents from './routeComponents';
import Header from '../Header/Header';

const Test = () => (
  <div>test path</div>
);

const AppRoutes = () => (
  <Router>
    <div className="container-fluid my-3">
      <Header />
      <div className="container my-3">
        <Route exact path="/" component={RouteComponents.Home} />
        <Route path="/test" component={Test} />
      </div>
    </div>
  </Router>
);

export default AppRoutes;
