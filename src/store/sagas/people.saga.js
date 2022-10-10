import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_PEOPLES,
  GET_PEOPLE_DETAILS,
  SET_PEOPLES,
  SET_PEOPLE_DETAILS,
} from "../actionTypes";
import getApiCaller from "../../Utility/getApiCaller";

function* getPeoples({ payload }) {
  const { type, actionFor, page } = payload;
  try {
    const apiCaller = getApiCaller(type, actionFor);
    const { results, total_pages } = yield call(apiCaller, page);
    yield put({
      type: SET_PEOPLES,
      results: [...results],
      total_pages: total_pages,
    });
  } catch (e) {
    console.log("error ", e);
  }
}

function* getPeopleDetails({ payload }) {
  const { type, actionFor, people_id } = payload;
  try {
    const apiCaller = getApiCaller(type, actionFor);
    if (apiCaller) {
      const results = yield call(apiCaller, people_id);
      yield put({ type: SET_PEOPLE_DETAILS, results: { ...results } });
    }
  } catch (e) {
    console.log("error ", e);
  }
}

function* peopleSaga() {
  yield takeEvery(GET_PEOPLES, getPeoples);
  yield takeEvery(GET_PEOPLE_DETAILS, getPeopleDetails);
}

export default peopleSaga;
