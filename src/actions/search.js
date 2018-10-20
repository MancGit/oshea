import { SEARCH_DEPARTURES } from "./types";
import { SET_SEARCH_INITIATED } from "./types";
import { SET_SEARCH_FINALISED } from "./types";
import axios from "axios";

let config = {
  headers: {
    Accept:
      "application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/",
    "X-Busbud-Token": "PARTNER_AHm3M6clSAOoyJg4KyCg7w"
  }
};

let passengers = 0;

export const searchDepartures = () => async dispatch => {
  passengers++;
  dispatchSearchInitiated(dispatch);
  let searchResult = await search();
  dispatchSearchFinalised(dispatch, searchResult.data);
};

//Action Helpers

//Search will initiate search and will initiate poll if not completed
const search = async () => {
  let searchResult = await axios.get(
    `https://napi.busbud.com/x-departures/f25dvk/dr5reg/2019-08-02?adult=${passengers}`,
    config
  );

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
    `https://napi.busbud.com/x-departures/f25dvk/dr5reg/2019-08-02/poll?adult=1&index=${
      searchResult.data.departures.length
    }`,
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
