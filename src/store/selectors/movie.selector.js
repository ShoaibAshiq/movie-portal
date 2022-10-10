import { Map, List } from "immutable";
import createSelector from "../../Utility/reselect";

const getMovies = (state) => {
  const movies = state.get("movies");
  return movies || Map();
};

export const getMoviesSelector = createSelector(getMovies, (state) => {
  return state.get("movies") ?? Map();
});

export const getMovieDetailsSelector = createSelector(getMovies, (state) => {
  return state.get("movieDetail") ?? Map();
});

export const getMovieReviewSelector = createSelector(getMovies, (state) => {
  return state.get("movieReviews") ?? Map();
});
