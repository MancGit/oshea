import { SEARCH_DEPARTURES } from "./types";
import { SET_SEARCH_INITIATED } from "./types";
import { SET_SEARCH_FINALISED } from "./types";
import axios from "axios";
import { config, urls } from "../config/api";

export const searchDepartures = () => async dispatch => {
  dispatchSearchInitiated(dispatch);
  let searchResult = await search();
  dispatchSearchFinalised(dispatch, searchResult.data);
};

/* Action Helpers */

//Search will initiate search and then initiate poll if not completed
const search = async () => {
  let searchResult = await axios.get(urls.search, config);

  if (searchResult.data.complete) {
    return searchResult;
  } else {
    let newSearchResult = await poll(searchResult);
    return newSearchResult;
  }
};

//Poll will recursively poll every 3 seconds until completed
const poll = async searchResult => {
  //Wait 3 seconds before polling
  await new Promise(resolve => {
    setTimeout(() => resolve("done"), 3000);
  });

  let pollResult = await axios.get(
    `${urls.poll}&index=${searchResult.data.departures.length}`,
    config
  );

  searchResult.data.departures.push(...pollResult.data.departures);
  searchResult.data.locations.push(...pollResult.data.locations);
  searchResult.data.operators.push(...pollResult.data.operators);

  if (pollResult.data.complete) {
    return searchResult;
  } else {
    let newSearchResult = await poll(searchResult);
    return newSearchResult;
  }
};

const dispatchSearchInitiated = dispatch => {
  dispatch({
    type: SET_SEARCH_INITIATED,
    searchInitiated: true
  });
  dispatch({
    type: SET_SEARCH_FINALISED,
    searchFinalised: false
  });
};

const dispatchSearchFinalised = (dispatch, payload) => {
  dispatch({
    type: SEARCH_DEPARTURES,
    payload
  });

  dispatch({
    type: SET_SEARCH_INITIATED,
    searchInitiated: false
  });
  dispatch({
    type: SET_SEARCH_FINALISED,
    searchFinalised: true
  });
};
