import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanet, fetchFilms, fetchedFilms, notFetchedFilms } from '../redux/actions';

import { PlanetInfo, Header } from '../styles';

class ShowPlanetInfo extends React.Component {
  componentDidMount() {
    this.props.notFetchedFilms();
    this.props.fetchPlanet(Math.floor(Math.random()*61)+1);
  }

  componentDidUpdate() {
  console.log(this.props.currPlanet);
    if (!this.props.fetched && this.props.currPlanet){
      this.props.fetchFilms(this.props.currPlanet.films);
      this.props.fetchedFilms();
    }
  }

//   fixPop(string) {
//       let arrString = string.split('').reverse();
//       arrString.map(() => {

//       })
//   }

  renderFilms() {
    if (this.props.films) {
      if (this.props.films.length > 0) {
        return this.props.films.map(film => {
          return (
            <h3 style={{ fontStyle: 'italic' }}>{film.title}</h3>
          );
        })
      } else {
        return <h3 style={{ fontStyle: 'italic' }}>Nenhum filme</h3>;
      }
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

          <h3>Filmes: {this.renderFilms()}</h3>
        </div>
        
      </div>
    );
  }

  render() {
    //console.log(this.props.currPlanet);

    if (this.props.currPlanet && this.props.films)
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
    films: state.swapi.films,
    fetched: state.swapi.fetched
  }
}

export default connect(
  mapStateToProps,
  { 
    fetchPlanet, 
    fetchFilms,
    fetchedFilms, 
    notFetchedFilms
  }
)(ShowPlanetInfo);
