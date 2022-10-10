import { Map, List } from "immutable";
import createSelector from "../../Utility/reselect";

const getPeoples = (state) => {
  const peoples = state.get("peoples");
  return peoples || Map();
};

export const getPeoplesSelector = createSelector(getPeoples, (state) => {
  return state.get("peoples") ?? List();
});

export const getPagesSelector = createSelector(getPeoples, (state) => {
  return state.get("total_pages") ?? Map();
});

export const getPeopleDetailsSelector = createSelector(getPeoples, (state) => {
  return state.get("peopleDetail") ?? Map();
});
