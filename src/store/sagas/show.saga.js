import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_SHOWS,
  GET_SHOW_DETAILS,
  GET_SHOW_REVIEWS,
  SET_ERROR,
  SET_SHOWS,
  SET_SHOW_DETAILS,
  SET_SHOW_REVIEWS,
} from "../actionTypes";
import getApiCaller from "../../Utility/getApiCaller";

function* getShows({ payload }) {
  const { type, actionFor, page } = payload;
  const { shows } = yield select((state) => state.getIn(["shows"]).toJS());
  try {
    const apiCaller = getApiCaller(type, actionFor);
    const { results } = yield call(apiCaller, page);
    yield put({ type: SET_SHOWS, payload: [...shows, ...results] });
  } catch (e) {
    // yield put({
    //   type: SET_ERROR,
    //   payload: "Something went wrong movies not found!",
    // });
    console.log("error ", e);
  }
}

function* getShowDetails({ payload }) {
  const { type, actionFor, id } = payload;
  try {
    const apiCaller = getApiCaller(type, actionFor);
    if (apiCaller) {
      const results = yield call(apiCaller, id);
      yield put({ type: SET_SHOW_DETAILS, payload: { ...results } });
    }
  } catch (e) {
    console.log("error ", e);
  }
}

function* getShowReviews({ payload }) {
  const { type, actionFor, id } = payload;
  try {
    const apiCaller = getApiCaller(type, actionFor);
    if (apiCaller) {
      const { results } = yield call(apiCaller, id);
      yield put({ type: SET_SHOW_REVIEWS, payload: [...results] });
    }
  } catch (e) {
    console.log("error ", e);
  }
}

function* showSaga() {
  yield takeEvery(GET_SHOWS, getShows);
  yield takeEvery(GET_SHOW_DETAILS, getShowDetails);
  yield takeEvery(GET_SHOW_REVIEWS, getShowReviews);
}

export default showSaga;
