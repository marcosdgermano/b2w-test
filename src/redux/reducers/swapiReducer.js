import _ from 'lodash';

export default (state = {}, action) => {
    if (action.type === 'FETCH_PLANET')
        return { ...state, currPlanet: action.payload }
    if (action.type === 'FETCH_FILMS')
        return { ...state, films: action.payload }
    if (action.type === 'FETCHED_FILMS')
        return { ...state, fetched: true }
    if (action.type === 'NOT_FETCHED_FILMS')
        return {...state, fetched: false};
    return state;
}