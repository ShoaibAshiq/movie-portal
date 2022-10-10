import { Map, List } from "immutable";
import createSelector from "../../Utility/reselect";

const getShows = (state) => {
  const shows = state.get("shows");
  return shows || Map();
};

export const getShowsSelector = createSelector(getShows, (state) => {
  return state.get("shows") ?? List();
});

export const getShowDetailsSelector = createSelector(getShows, (state) => {
  return state.get("showDetail") ?? Map();
});

export const getShowReviewSelector = createSelector(getShows, (state) => {
  return state.get("showReviews") ?? List();
});
