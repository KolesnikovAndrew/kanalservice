import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

const initialState = {
  isAuth: false,
  login: "localhost",
  password: "12345",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION":
      return state;
    default:
      return state;
  }
};

export default function configureStore(preloadState) {
  const middlewares = [ReduxThunk];
  const middlewareEnchancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnchancer];
  const composedEnhancers = compose(...enhancers);
  const store = createStore(AppReducer, preloadState, composedEnhancers);
  return store;
}
