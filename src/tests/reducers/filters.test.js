import filtersReducer from "../../reducers/filters";
import { SET_SORT_BY } from "../../actions/types";

const defaultState = { sortBy: "earliest" };

test("Should setup up default sort values in state", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual(defaultState);
});

test("Should setup up sortBy values in state", () => {
  const action = { type: SET_SORT_BY, sortBy: "latest" };

  const state = filtersReducer(defaultState, action);

  expect(state).toEqual({ sortBy: "latest" });
});
