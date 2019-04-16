import swapi from '../../api/swapi';

export const fetchPlanet = id => async dispatch => {
    dispatch({ type: 'FETCH_PLANET_REQUEST' });

    try {
        const response = await swapi.get(`https://swapi.co/api/planets/${id}`);

        const films = await Promise.all(response.data.films.map(async link =>  {
            const response = await swapi.get(link);
            return response.data;
        }));

        //console.log(response.data, films);
        dispatch({ type: 'FETCH_PLANET', payload: { planet: response.data, films: films} })

    } catch (e) {

    }
}

// export const fetchFilms = links => async dispatch => {
//     console.log('chegou');
//     const responses = await Promise.all(links.map(async link =>  {
//         const response = await swapi.get(link);
//         return response.data;
//     }));

//     dispatch({ type: 'FETCH_FILMS', payload: responses });
// }