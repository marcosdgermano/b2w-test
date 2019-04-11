import { combineReducers } from 'redux';
import swapiReducer from './swapiReducer';

export default combineReducers({
    swapi: swapiReducer
});