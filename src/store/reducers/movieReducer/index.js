const INITIAL_STATE = {
    movies: [],
    isLoading: false,
    pagination: {
        active: 1,
        totalPages: 20
    }
}

const movieReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case 'LOADED_MOVIE':
            return { ...state, movies: payload.rows, isLoading: false };
        case 'IS_LOADING_MOVIE':
            return { ...state, isLoading: payload };
        case 'SET_PAGE_CURRENT_MOVIE':
            return { ...state, pagination: Object.assign({}, state.pagination, { active: payload }) };
        default:
            return state;
    }
}

export default movieReducer;