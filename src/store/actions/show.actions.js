import { GET_SHOWS, GET_SHOW_DETAILS, GET_SHOW_REVIEWS } from "../actionTypes";

export function getShowsAction(payload) {
  return {
    type: GET_SHOWS,
    payload,
  };
}

export function getShowDetailsAction(payload) {
  return {
    type: GET_SHOW_DETAILS,
    payload,
  };
}

export function getShowReviewsAction(payload) {
  return {
    type: GET_SHOW_REVIEWS,
    payload,
  };
}
