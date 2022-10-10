import {
  GET_FREE_TO_WATCH,
  GET_LATEST_TRAILER,
  GET_SEARCH,
  GET_TRENDING,
  GET_WHATS_POPULAR,
} from "../actionTypes";

export function getWhatsPopularAction(payload) {
  return {
    type: GET_WHATS_POPULAR,
    payload,
  };
}

export function getFreeToWatchAction(payload) {
  return {
    type: GET_FREE_TO_WATCH,
    payload,
  };
}

export function getLatestTrailerAction(payload) {
  return {
    type: GET_LATEST_TRAILER,
    payload,
  };
}

export function getTrendingAction(payload) {
  return {
    type: GET_TRENDING,
    payload,
  };
}

export function getSearchAction(payload) {
  return {
    type: GET_SEARCH,
    payload,
  };
}
