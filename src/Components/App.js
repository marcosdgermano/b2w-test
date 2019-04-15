import React from 'react';
import ShowPlanetInfo from './ShowPlanetInfo';
import Button from './Button';
import { MainContainer, PlanetInfo } from '../styles';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2" />
        <PlanetInfo className="ui main text container col-md-auto">
          <ShowPlanetInfo/>
        </PlanetInfo>
        <Button className="col-md-auto"/>
        <div className="col-md-3" />
      </div>
    </div>
  );
}

export default App;