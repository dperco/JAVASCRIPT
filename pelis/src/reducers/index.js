const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.title)
        }
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.filter((movie) => movie.id !== action.id)
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type === "GET_DETAILS") {
        return {
          ...state,
          movieDetail: action.payload
        };
    }
    return state;
  }
  
  export default rootReducer;