import swapi from '../../api/swapi';
import swapiImages from '../../api/swapiImages';

export const fetchPlanet = id => async dispatch => {
    dispatch({ type: 'FETCH_PLANET_REQUEST' });

    try {
        const response = await swapi.get(`https://swapi.co/api/planets/${id}`);

        const films = await Promise.all(response.data.films.map(async film =>  {
            const response = await swapi.get(film);
            const image = await swapiImages.get(`http://localhost:3001/images/${response.data.episode_id}`);
            return { ...response.data, img: image.data };
        }));

        //console.log(response.data, films);
        dispatch({ type: 'FETCH_PLANET', payload: { planet: response.data, films: films} })

    } catch (e) {
        dispatch({ type: 'FETCH_PLANET_ERROR', error: e });
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