import _ from 'lodash';

const INIT_STATE = {
    planetRequesting: true,
    planetError: null,
    planet: {},
    films: {}
}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case 'FETCH_PLANET_REQUEST':
            return { ...state, planetRequesting: true }
        case 'FETCH_PLANET_ERROR': 
            return { 
                ...state,
                planetRequesting: false,
                planetError: action.error,
                planet: {},
                films: {}
            };
        case 'FETCH_PLANET': 
            return { 
                ...state,
                planetRequesting: false,
                planetError: null,
                planet: action.payload.planet,
                films: action.payload.films
            };
        default:
            return state;
    }
}