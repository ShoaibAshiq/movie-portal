import { fromJS, List } from "immutable";
import {
  SET_FREE_TO_WATCH,
  SET_LASTEST_TRAILER,
  SET_SEARCH,
  SET_TRENDING,
  SET_WHATS_POPULAR,
} from "../actionTypes";

export const initailState = fromJS({
  popular: List([]),
  freeToWatch: List([]),
  trailer: List([]),
  trending: List([]),
  searchResults: List([]),
  error : ""
});

const homeReducer = (state = initailState, { payload, type }) => {
  switch (type) {
    case SET_WHATS_POPULAR:
      return state.set("popular", payload);
    case SET_FREE_TO_WATCH:
      return state.set("freeToWatch", payload);
    case SET_LASTEST_TRAILER:
      return state.set("trailer", payload);
    case SET_TRENDING:
      return state.set("trending", payload);
    case SET_SEARCH:
      return state.set("searchResults", payload);
    default:
      return state;
  }
};
export default homeReducer;
