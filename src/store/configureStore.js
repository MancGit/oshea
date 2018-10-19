import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import searchReducer from "../reducers/search";
import searchStatusReducer from "../reducers/searchStatus";
import filtersReducer from "../reducers/filters";

export default () => {
  const middleware = [thunk];

  const store = createStore(
    combineReducers({
      search: searchReducer,
      searchStatus: searchStatusReducer,
      filters: filtersReducer
    }),
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
