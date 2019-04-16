import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanet } from '../redux/actions';
import { formatThousandSeparator, translateError, random } from '../helpers';

import { PlanetInfo, Header, Film } from '../styles';

class ShowPlanetInfo extends React.Component { 
  componentDidMount() {
    this.props.fetchPlanet(random(61));
  }

  renderFilms() {
    const { films } = this.props;
    if (films) {
      if (films.length > 0) {
        return films.map(film => {
          return (
            <Film>{film.title}; </Film>
          );
        })
      } else {
        return <Film>Nenhum filme</Film>;
      }
    }

    return null;
  }

  renderPlanet() {
    const { planet } = this.props;
    return (
      <div>
        <Header className="ui header">{planet.name}</Header>
        <div className="innerContent">
          <h2>População: {formatThousandSeparator(planet.population)}</h2>
          <h2>Clima: {planet.climate}</h2>
          <h2>Terreno: {planet.terrain}</h2>

          <h2>Filmes: {this.renderFilms()}</h2>
        </div>
        
      </div>
    );
  }

  render() {
    const { planet, planetRequesting, planetError } = this.props;

    if (planetRequesting) {
      return (
        <div className="ui active dimmer">
          <div className="ui loader" />
        </div>
      );
    }

    if (planetError) 
      return <p>{translateError(planetError)}</p>;

    if (planet) return this.renderPlanet();
  }
}

const mapStateToProps = (state) => {
  return {
    planet: state.swapi.planet,
    planetRequesting: state.swapi.planetRequesting,
    planetError: state.swapi.planetError,
    films: state.swapi.films
  }
}

export default connect(mapStateToProps, { fetchPlanet })(ShowPlanetInfo);
