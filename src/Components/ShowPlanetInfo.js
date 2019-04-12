import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanet, fetchFilms } from '../redux/actions'

import { PlanetInfo, Header } from '../styles';

class ShowPlanetInfo extends React.Component {
  componentDidMount() {
    this.props.fetchPlanet(5);
  }

  componentDidUpdate() {
    this.props.fetchFilms(this.props.currPlanet.films);
  }

//   fixPop(string) {
//       let arrString = string.split('').reverse();
//       arrString.map(() => {

//       })
//   }

  renderFilms() {
    if (this.props.films) {
      return this.props.films.map(film => {
        return (
          <h3 style={{ fontStyle: 'italic' }}>{film.title}</h3>
        );
      })
    }

    return null;
  }

  renderPlanet() {
    const planet = this.props.currPlanet;
    //console.log(planet.population.split('').reverse().join('', 3));
    return (
      <div>
        <Header className="ui header">{planet.name}</Header>
        <div className="innerContent">
          <h2>População: {planet.population}</h2>
          <h2>Clima: {planet.climate}</h2>
          <h2>Terreno: {planet.terrain}</h2>

          <h3>Filmes: </h3>
        </div>
        
      </div>
    );
  }

  render() {
    //console.log(this.props.currPlanet);

    if (this.props.currPlanet)
      return this.renderPlanet();

    return (
      <div className="ui active dimmer innerContent">
        <div className="ui loader" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currPlanet: state.swapi.currPlanet,
    films: state.swapi.films
  }
}

export default connect(mapStateToProps, { fetchPlanet, fetchFilms })(ShowPlanetInfo);
