import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  GET_MOVIES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_REVIEWS,
  SET_MOVIES,
  SET_MOVIE_DETAILS,
  SET_MOVIE_REVIEWS,
} from "../actionTypes";
import getApiCaller from "../../Utility/getApiCaller";

function* getMovies({ payload }) {
  const { type, actionFor, page } = payload;
  const { movies } = yield select((state) => state.getIn(["movies"]).toJS());
  try {
    const apiCaller = getApiCaller(type, actionFor);
    if (apiCaller) {
      const { results } = yield call(apiCaller, page);
      yield put({ type: SET_MOVIES, payload: [...movies, ...results] });
    }
  } catch (e) {
    console.log("error ", e);
  }
}

function* getMovieDetails({ payload }) {
  const { type, actionFor, movie_id } = payload;
  try {
    const apiCaller = getApiCaller(type, actionFor);
    if (apiCaller) {
      const results = yield call(apiCaller, movie_id);
      yield put({ type: SET_MOVIE_DETAILS, payload: { ...results } });
    }
  } catch (e) {
    console.log("error ", e);
  }
}

function* getMovieReviews({ payload }) {
  const { type, actionFor, movie_id } = payload;
  try {
    const apiCaller = getApiCaller(type, actionFor);
    if (apiCaller) {
      const { results } = yield call(apiCaller, movie_id);
      yield put({ type: SET_MOVIE_REVIEWS, payload: [...results] });
    }
  } catch (e) {
    console.log("error ", e);
  }
}

function* movieSaga() {
  yield takeEvery(GET_MOVIES, getMovies);
  yield takeEvery(GET_MOVIE_DETAILS, getMovieDetails);
  yield takeEvery(GET_MOVIE_REVIEWS, getMovieReviews);
}

export default movieSaga;
