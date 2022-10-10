import { GET_MOVIES, GET_MOVIE_DETAILS, GET_MOVIE_REVIEWS } from "../actionTypes";

export function getMoviesAction(payload) {
  return {
    type: GET_MOVIES,
    payload,
  };
}

export function getMovieDetailsAction(payload) {
  return {
    type: GET_MOVIE_DETAILS,
    payload,
  };
}

export function getMovieReviewsAction(payload) {
  return {
    type: GET_MOVIE_REVIEWS,
    payload,
  };
}

