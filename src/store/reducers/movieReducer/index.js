const INITIAL_STATE = {
    movies: [],
    isLoading: false,
    search: {
        active: 1,
        totalPages: 1
    }
}

const movieReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case 'LOADED_MOVIE':
            return { ...state, movies: payload.rows, search: Object.assign({}, state.search, { totalPages: payload.totalPages }), isLoading: false };
        case 'IS_LOADING_MOVIE':
            return { ...state, isLoading: payload };
        default:
            return state;
    }
}

export default movieReducer;