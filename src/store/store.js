import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux-immutable";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import { homeReducer, movieReducer, peopleReducer, showReducer } from "./reducers";

const SagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  home: homeReducer,
  movies: movieReducer,
  shows: showReducer,
  peoples: peopleReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware))
);
SagaMiddleware.run(rootSaga);
export default store;
