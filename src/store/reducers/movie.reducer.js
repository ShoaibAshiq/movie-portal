import { fromJS, List, Map } from "immutable";
import { SET_MOVIES, SET_MOVIE_DETAILS, SET_MOVIE_REVIEWS } from "../actionTypes";

export const initailState = fromJS({
  name: "movies",
  movies: List([]),
  movieDetail: Map(),
  movieReviews: List([]),
  error : ""
});

const movieReducer = (state = initailState, { payload, type }) => {
  switch (type) {
    case SET_MOVIES:
      return state.set("movies", payload);
    case SET_MOVIE_DETAILS:
      return state.set("movieDetail", payload);
    case SET_MOVIE_REVIEWS:
      return state.set("movieReviews", payload);
    default:
      return state;
  }
};
export default movieReducer;
