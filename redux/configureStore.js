import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { middleware as awaitMiddleware } from "redux-await";
import rootReducers from "./reducers";

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers(rootReducers),
    initialState,
    compose(applyMiddleware(thunkMiddleware, awaitMiddleware))
  );
}
