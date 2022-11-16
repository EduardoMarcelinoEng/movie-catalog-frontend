const INITIAL_STATE = {
    movies: [
        {
            id: 1,
            title: "Castle in the Sky",
            image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
            description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
            director: "Hayao Miyazaki",
            producer: "Isao Takahata"
        }
    ],
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