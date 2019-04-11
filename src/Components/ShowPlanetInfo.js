import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanet } from '../redux/actions'

import { PlanetInfo } from '../styles';

class ShowPlanetInfo extends React.Component {
  componentDidMount() {
    this.props.fetchPlanet(Math.floor(Math.random() * 61) + 1);
  }
  
//   fixPop(string) {
//       let arrString = string.split('').reverse();
//       arrString.map(() => {

//       })
//   }

  renderPlanet() {
    const planet = this.props.currPlanet;
    //console.log(planet.population.split('').reverse().join('', 3));
    return (
      <PlanetInfo className="ui main text container">
        <h1 className="ui header">{planet.name}</h1>

        <h2>População: {planet.population}</h2>
        <h2>Clima: {planet.climate}</h2>
        <h2>Terreno: {planet.terrain}</h2>
      </PlanetInfo>
    );
  }

  render() {
    console.log(this.props.currPlanet);

    if (this.props.currPlanet)
      return this.renderPlanet();

    return <div>Loading</div>;
  }
}

const mapStateToProps = (state) => {
  return { currPlanet: state.swapi.currPlanet }
}

export default connect(mapStateToProps, { fetchPlanet })(ShowPlanetInfo);
