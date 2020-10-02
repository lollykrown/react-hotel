import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Route path ='/' component={Home}>
      <Route path ='/' component={Rooms}>
      <Route path ='/' component={SingleRoom}>
      <Route path ='/' component={Error}>
    </div>
  );
}

export default App;
