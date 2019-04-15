import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanet, notFetchedFilms } from '../redux/actions';
import { NextButton } from '../styles';

class Button extends React.Component {
    clickNext = () => {
        this.props.notFetchedFilms();
        this.props.fetchPlanet(Math.floor(Math.random()*61)+1);
    }
    
    render() {
        return <NextButton className="ui button primary" onClick={this.clickNext}>Next</NextButton>;
    }
}

export default connect(null, { fetchPlanet, notFetchedFilms })(Button);