import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanet } from '../redux/actions';

import { formatThousandSeparator, translateError, random } from '../helpers';
import { Header, Film, FilmImage } from '../styles';

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
            <FilmImage 
              title={film.title}
              src={film.img.url} 
              alt=""
            />
          );
        })
      } else {
        return <h3>No Film</h3>;
      }
    }

    return <span>Error: No film loaded</span>;
  }

  renderPlanet() {
    const { planet } = this.props;
    return (
      <div>
        <Header className="ui header">{planet.name}</Header>
        <div className="innerContent">
          <h2>População:
            <p>&nbsp;{formatThousandSeparator(planet.population)}</p>
          </h2>
          <h2>Clima: 
            <p>&nbsp;{planet.climate}</p>
          </h2>
          <h2>Terreno:
            <p>&nbsp;{planet.terrain}</p>
          </h2>
          <h2>Filmes:</h2>
          <div style={{ textAlign: 'center' }}>{this.renderFilms()}</div>
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
