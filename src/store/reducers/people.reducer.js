import { fromJS, List, Map } from "immutable";
import { SET_PEOPLES, SET_PEOPLE_DETAILS } from "../actionTypes";

export const initailState = fromJS({
  name: "people",
  peoples: List([]),
  peopleDetail: Map(),
  total_pages: Map(),
  error : ""
});

const peopleReducer = (
  state = initailState,
  { results, total_pages, type }
) => {
  switch (type) {
    case SET_PEOPLES:
      return state.set("peoples", results).set("total_pages", total_pages);
    case SET_PEOPLE_DETAILS:
      return state.set("peopleDetail", results);
    default:
      return state;
  }
};
export default peopleReducer;
