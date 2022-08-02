import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import AppReducer from "./reducers/index";

export default function configureStore() {
  const middlewares = [ReduxThunk];

  const composedEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  const enhancers = composedEnhancers(applyMiddleware(...middlewares));
  const store = createStore(AppReducer, enhancers);
  return store;
}
