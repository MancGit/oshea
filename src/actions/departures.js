import { GET_DEPARTURES } from "./types";
import axios from "axios";
import moment from "moment";

let config = {
  headers: {
    Accept:
      "application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/",
    "X-Busbud-Token": "PARTNER_AHm3M6clSAOoyJg4KyCg7w"
  }
};

const dispatchSearchInitiated = payload => {};

const dispatchSearchFinished = payload => {};

export const getDepartures = () => async dispatch => {
  dispatch({
    type: "SET_SEARCH_INITIATED",
    searchInitiated: true
  });
  dispatch({
    type: "SET_SEARCH_FINALISED",
    searchFinalised: false
  });

  let searchResult = await axios.get(
    "https://napi.busbud.com/x-departures/f25dvk/dr5reg/2019-08-02?adult=1",
    config
  );

  let lastReceivedDepartures = searchResult.data.departures.length;
  let pollResult, newLocations, newOperators;

  if (!searchResult.data.complete) {
    var interval = setInterval(async function() {
      pollResult = await axios.get(
        `https://napi.busbud.com/x-departures/f25dvk/dr5reg/2019-08-02/poll?adult=1&&index=${lastReceivedDepartures}`,
        config
      );
      lastReceivedDepartures = pollResult.data.departures.length;

      //update departures,locations,and providers of search result
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

      if (pollResult.data.complete) {
        dispatch({
          type: GET_DEPARTURES,
          payload: searchResult.data
        });

        dispatch({
          type: "SET_SEARCH_INITIATED",
          searchInitiated: false
        });
        dispatch({
          type: "SET_SEARCH_FINALISED",
          searchFinalised: true
        });
        clearInterval(interval);
      }
    }, 5000);
  } else {
    dispatch({
      type: GET_DEPARTURES,
      payload: searchResult.data
    });

    dispatch({
      type: "SET_SEARCH_INITIATED",
      searchInitiated: false
    });
    dispatch({
      type: "SET_SEARCH_FINALISED",
      searchFinalised: true
    });
  }
};
