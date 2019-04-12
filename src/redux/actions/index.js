import _ from 'lodash';
import swapi from '../../api/swapi';

export const fetchPlanet = id => async dispatch => {
    const response = await swapi.get(`https://swapi.co/api/planets/${id}`);
    
    dispatch({ type: 'FETCH_PLANET', payload: response.data });
    console.log(response.data);
}

export const fetchFilms = links => async dispatch => {
    const responses = await Promise.all(links.map(async link =>  {
        const response = await swapi.get(link);
        return response.data;
    }));
    console.log(responses);

    dispatch({ type: 'FETCH_FILMS', payload: responses });
}

export const fetchedFilms = () => {
    return { type: 'FETCHED_FILMS' };
}