import { spawn } from "redux-saga/effects";
import homeSaga from "./home.saga";
import movieSaga from "./movie.saga";
import showSaga from "./show.saga";
import peopleSaga from "./people.saga";

export default function* rootSaga() {
  yield spawn(homeSaga);
  yield spawn(movieSaga);
  yield spawn(showSaga);
  yield spawn(peopleSaga);
}
