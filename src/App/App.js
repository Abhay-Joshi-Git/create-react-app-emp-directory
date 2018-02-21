import React from 'react';
import './App.css';
import Header from './Header/Header';
import AppRoutes from './routing/Routes';

const App = () => (
  <div className="App">
    <Header />
    <AppRoutes className="my-3" />
  </div>
);

export default App;
