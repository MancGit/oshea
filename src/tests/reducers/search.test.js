import searchReducer from "../../reducers/search";
import search from "../fixtures/search";
import { SEARCH_DEPARTURES } from "../../actions/types";

const defaultState = [];

test("Should setup up default search values in state", () => {
  const state = searchReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual(defaultState);
});

test("Should setup up search values in state", () => {
  const action = { type: SEARCH_DEPARTURES, payload: search };

  const state = searchReducer(defaultState, action);

  expect(state).toEqual({ data: search });
});
