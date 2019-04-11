import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowPlanetInfo from './ShowPlanetInfo';
import { MainContainer } from '../styles';

const App = () => {

  return (
    <MainContainer className="container">
      <div className="row">
        <div className></div>
        <ShowPlanetInfo/>
      </div>
          
    </MainContainer>
  );
}

export default App;