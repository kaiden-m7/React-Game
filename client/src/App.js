import React from 'react';
import Jumbotron from './components/Jumbotron';
import MainContainer from './components/MainContainer';
import './App.css';

const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainContainer /> 
  </div>
);

export default App;
