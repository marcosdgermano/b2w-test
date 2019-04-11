export default (state = {}, action) => {
    if (action.type === 'FETCH_PLANET')
        return { ...state, currPlanet: action.payload }

    return state;
}