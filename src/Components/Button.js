import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanet} from '../redux/actions';
import { NextButton } from '../styles';
import { random } from '../helpers';

class Button extends React.Component {
    clickNext = () => {
        this.props.fetchPlanet(random(61));
    }
    
    render() {
        return <NextButton 
            className="ui button primary" 
            onClick={this.clickNext}>
                Next
        </NextButton>;
    }
}

export default connect(null, { fetchPlanet })(Button);