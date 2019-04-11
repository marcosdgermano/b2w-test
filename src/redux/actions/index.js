import swapi from '../../api/swapi';

export const fetchPlanet = id => async dispatch => {
    const response = await swapi.get(`/planets/${id}`);

    dispatch({ type: 'FETCH_PLANET', payload: response.data });
}