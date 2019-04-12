import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowPlanetInfo from './ShowPlanetInfo';
import { MainContainer, PlanetInfo } from '../styles';

const App = () => {

  return (
    <MainContainer className="container">
      <div className="row" style={{ position: 'absolute' }}>
        <div></div>
        <PlanetInfo className="ui main text container">
          <ShowPlanetInfo/>
        </PlanetInfo>
      </div>
          
    </MainContainer>
  );
}

export default App;