import _ from 'lodash';
import swapi from '../../api/swapi';

export const fetchPlanet = id => async dispatch => {
    dispatch(notFetchedFilms);
    const response = await swapi.get(`https://swapi.co/api/planets/${id}`);
    
    dispatch({ type: 'FETCH_PLANET', payload: response.data });
    dispatch(fetchFilms(response.data.films));
}

export const fetchFilms = links => async dispatch => {
    console.log('chegou');
    const responses = await Promise.all(links.map(async link =>  {
        const response = await swapi.get(link);
        return response.data;
    }));

    dispatch({ type: 'FETCH_FILMS', payload: responses });
}

export const returnPlanet = id => async dispatch => {
    return fetchPlanet(id).then(films => fetchFilms(films));
}

export const fetchedFilms = () => {
    return { type: 'FETCHED_FILMS' };
}

export const notFetchedFilms = () => {
    return { type: 'NOT_FETCHED_FILMS' };
}