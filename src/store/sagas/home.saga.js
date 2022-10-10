import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_FREE_TO_WATCH,
  GET_LATEST_TRAILER,
  GET_SEARCH,
  GET_TRENDING,
  GET_WHATS_POPULAR,
  SET_FREE_TO_WATCH,
  SET_LASTEST_TRAILER,
  SET_SEARCH,
  SET_TRENDING,
  SET_WHATS_POPULAR,
} from "../actionTypes";
import getApiCaller from "../../Utility/getApiCaller";

function* getWhatsPopular({ payload }) {
  const { actionFor } = payload;
  try {
    const apiCaller = getApiCaller(actionFor);
    const { results } = yield call(apiCaller, payload);
    yield put({ type: SET_WHATS_POPULAR, payload: [...results] });
  } catch (e) {
    console.log("error ", e);
  }
}

function* getFreeToWatch({ payload }) {
  const { actionFor } = payload;
  try {
    const apiCaller = getApiCaller(actionFor);
    const { results } = yield call(apiCaller, payload);
    yield put({ type: SET_FREE_TO_WATCH, payload: [...results] });
  } catch (e) {
    console.log("error ", e);
  }
}

function* getLatestTrailer({ payload }) {
  const { actionFor } = payload;
  try {
    const apiCaller = getApiCaller(actionFor, payload);
    const { results } = yield call(apiCaller);
    yield put({ type: SET_LASTEST_TRAILER, payload: [...results] });
  } catch (e) {
    console.log("error ", e);
  }
}

function* getTrending({ payload }) {
  const { actionFor } = payload;
  let type = "day";
  if (actionFor === "This Week") {
    type = "week";
  }
  try {
    const apiCaller = getApiCaller(actionFor);
    const { results } = yield call(apiCaller, type);
    yield put({ type: SET_TRENDING, payload: [...results] });
  } catch (e) {
    console.log("error ", e);
  }
}

function* getSearchResults({ payload }) {
  const { actionFor, search } = payload;
  try {
    if (search.trim() != "") {
      const apiCaller = getApiCaller(actionFor);
      const { results } = yield call(apiCaller, search);
      yield put({ type: SET_SEARCH, payload: [...results] });
    } else {
      yield put({ type: SET_SEARCH, payload: [] });
    }
  } catch (e) {
    console.log("error ", e);
  }
}

function* homeSaga() {
  yield takeLatest(GET_WHATS_POPULAR, getWhatsPopular);
  yield takeLatest(GET_FREE_TO_WATCH, getFreeToWatch);
  yield takeLatest(GET_LATEST_TRAILER, getLatestTrailer);
  yield takeLatest(GET_TRENDING, getTrending);
  yield takeLatest(GET_SEARCH, getSearchResults);
}
export default homeSaga;
