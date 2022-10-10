import { fromJS, List, Map } from "immutable";
import {
  SET_ERROR,
  SET_SHOWS,
  SET_SHOW_DETAILS,
  SET_SHOW_REVIEWS,
} from "../actionTypes";

export const initailState = fromJS({
  name: "shows",
  shows: List([]),
  showDetail: Map({}),
  showReviews: List([]),
  error: "",
});

const showReducer = (state = initailState, { payload, type }) => {
  console.log("payload for error : ", payload);
  switch (type) {
    case SET_SHOWS:
      return state.set("shows", payload);
    case SET_SHOW_DETAILS:
      return state.set("showDetail", payload);
    case SET_SHOW_REVIEWS:
      return state.set("showReviews", payload);
    case SET_ERROR:
      return state.set("error", payload);
    default:
      return state;
  }
};
export default showReducer;
