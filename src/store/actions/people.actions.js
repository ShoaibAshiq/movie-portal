import { GET_PEOPLES, GET_PEOPLE_DETAILS } from "../actionTypes";

export function getPeoplesAction(payload) {
  return {
    type: GET_PEOPLES,
    payload,
  };
}

export function getPeopleDetailDetailsAction(payload) {
  return {
    type: GET_PEOPLE_DETAILS,
    payload,
  };
}
