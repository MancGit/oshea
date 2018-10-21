import {
  setSearchInitiated,
  setSearchFinalised
} from "../../actions/searchStatus";
import {
  SET_SEARCH_INITIATED,
  SET_SEARCH_FINALISED
} from "../../actions/types";

test("Should setup setSearchInitiated action object", () => {
  const action = setSearchInitiated(true);

  expect(action).toEqual({
    type: SET_SEARCH_INITIATED,
    searchInitiated: true
  });
});

test("Should setup setSearchFinalised action object", () => {
  const action = setSearchFinalised(true);

  expect(action).toEqual({
    type: SET_SEARCH_FINALISED,
    searchFinalised: true
  });
});
