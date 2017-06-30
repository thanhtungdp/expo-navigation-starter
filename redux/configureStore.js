import { combineReducers, applyMiddleware, compose } from "redux";
import Reactotron from "reactotron-react-native";
import thunkMiddleware from "redux-thunk";
import { middleware as awaitMiddleware } from "redux-await";
import rootReducers from "./reducers";

export default function configureStore(initialState = {}) {
  return Reactotron.createStore(
    combineReducers(rootReducers),
    initialState,
    compose(applyMiddleware(thunkMiddleware, awaitMiddleware))
  );
}
