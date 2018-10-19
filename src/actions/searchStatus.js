import { SET_SEARCH_INITIATED } from "./types";
import { SET_SEARCH_FINALISED } from "./types";

export const setSearchInitiated = searchInitiated => ({
  type: SET_SEARCH_INITIATED,
  searchInitiated
});

export const setSearchFinalised = searchFinalised => ({
  type: SET_SEARCH_FINALISED,
  searchFinalised
});
