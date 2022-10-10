import { Map, List } from "immutable";
import createSelector from "../../Utility/reselect";

const getHome = (state) => {
  const home = state.get("home");
  return home || Map();
};

export const PopularSelector = createSelector(getHome, (state) => {
  return state.get("popular") ?? Map();
});

export const getFreeToWatchSelector = createSelector(getHome, (state) => {
  return state.get("freeToWatch") ?? List();
});

export const getLatestTrailerSelector = createSelector(getHome, (state) => {
  return state.get("trailer") ?? List();
});

export const getTrendingSelector = createSelector(getHome, (state) => {
  return state.get("trending") ?? List();
});

export const getSearchResultsSelector = createSelector(getHome, (state) => {
  return state.get("searchResults") ?? Map();
});

