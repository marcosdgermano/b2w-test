import React from 'react';
import ShowPlanetInfo from './ShowPlanetInfo';
import Button from './Button';
import { MainContainer, PlanetInfo, Row } from '../styles';

const App = () => {
  return (
    <MainContainer id="mainContainer" className="container">
      <Row>
        <PlanetInfo className="ui main text container" >
          <ShowPlanetInfo/>
        </PlanetInfo>
        <Button/>
      </Row>
    </MainContainer>
  );
}

export default App;