import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type){
        case 'FETCH_PLANET': 
            return { ...state, currPlanet: action.payload };
        case 'FETCH_FILMS':
            return { ...state, films: action.payload }
        case 'FETCHED_FILMS':
            return { ...state, fetched: true }
        case 'NOT_FETCHED_FILMS':
            return {...state, fetched: false};
        default: 
            return state
    }
}