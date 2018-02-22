import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteComponents from './routeComponents';
import Header from '../header/Header';

const Test = () => (
  <div>test path</div>
);

const AppRoutes = () => (
  <Router>
    <div
      className="container-fluid"
      style={{ height: '100%', padding: '5px 0px', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <div
        className="container"
        style={{ flexGrow: 1 }}
      >
        <Route exact path="/" component={RouteComponents.Home} />
        <Route path="/test" component={Test} />
        <Route exact path="/departments" component={RouteComponents.DepartmentList} />
        <Route path="/departments/:id" component={RouteComponents.DepartmentDetails} />
      </div>
    </div>
  </Router>
);

export default AppRoutes;
