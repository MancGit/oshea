import searchStatusReducer from "../../reducers/searchStatus";
import {
  SET_SEARCH_INITIATED,
  SET_SEARCH_FINALISED
} from "../../actions/types";

const defaultState = {
  searchInitiated: false,
  searchFinalised: false
};

test("Should setup up default searchStatus values in state", () => {
  const state = searchStatusReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual(defaultState);
});

test("Should setup up searchInitiated in state", () => {
  const action = { type: SET_SEARCH_INITIATED, searchInitiated: true };

  const state = searchStatusReducer(defaultState, action);

  expect(state).toEqual({ ...defaultState, searchInitiated: true });
});

test("Should setup up searchFinalised in state", () => {
  const action = { type: SET_SEARCH_FINALISED, searchFinalised: true };

  const state = searchStatusReducer(defaultState, action);

  expect(state).toEqual({ ...defaultState, searchFinalised: true });
});
