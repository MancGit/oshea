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

export const searchDepartures = () => async dispatch => {
  dispatchSearchInitiated(dispatch);

  let searchResult = await axios.get(
    "https://napi.busbud.com/x-departures/f25dvk/dr5reg/2019-08-02?adult=1",
    config
  );

  let lastReceivedDeparturesCount = searchResult.data.departures.length;

  if (!searchResult.data.complete) {
    let pollResult, newLocations, newOperators;

    //Initiate interval to poll every 3 seconds until completed
    var interval = setInterval(async function() {
      pollResult = await axios.get(
        `https://napi.busbud.com/x-departures/f25dvk/dr5reg/2019-08-02/poll?adult=1&index=${lastReceivedDeparturesCount}`,
        config
      );

      lastReceivedDeparturesCount =
        searchResult.data.departures.length === 0
          ? lastReceivedDeparturesCount
          : searchResult.data.departures.length;

      //update departures,locations,and providers of search result with new results from polling
      searchResult.data.departures.push(...pollResult.data.departures);

      newLocations = pollResult.data.locations.filter(
        location =>
          searchResult.data.locations.filter(o => o.id !== location.id).length >
          0
      );
      searchResult.data.locations.push(...newLocations);

      newOperators = pollResult.data.operators.filter(
        operator =>
          searchResult.data.operators.filter(o => o.id !== operator.id).length >
          0
      );
      searchResult.data.operators.push(...newOperators);

      //set state and break from interval if search finished
      if (pollResult.data.complete) {
        dispatchSearchFinalised(dispatch, searchResult.data);
        clearInterval(interval);
      }
    }, 3000);
  } else {
    //set state if search finished
    dispatchSearchFinalised(dispatch, searchResult.data);
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
