import { GET_DEPARTURES } from "./types";
import axios from "axios";
import moment from "moment";

export const getDepartures = () => async dispatch => {
  // let searchResult = await axios.get("SearchResponse.json");

  // let pollResult, newLocations, newOperators;
  // let count = 1;

  // dispatch({
  //   type: "SET_SEARCH_INITIATED",
  //   searchInitiated: true
  // });
  // dispatch({
  //   type: "SET_SEARCH_FINALISED",
  //   searchFinalised: false
  // });

  // if (!searchResult.data.complete) {
  //   var interval = setInterval(async function() {
  //     pollResult = await axios.get(`PollResponse${count}.json`);
  //     count++;

  //     if (pollResult.data.complete) {
  //       dispatch({
  //         type: "SET_SEARCH_INITIATED",
  //         searchInitiated: false
  //       });
  //       dispatch({
  //         type: "SET_SEARCH_FINALISED",
  //         searchFinalised: true
  //       });
  //       clearInterval(interval);
  //     }
  //     //update departures,locations,and providers of search result
  //     searchResult.data.departures.push(...pollResult.data.departures);

  //     newLocations = pollResult.data.locations.filter(
  //       location =>
  //         searchResult.data.locations.filter(o => o.id !== location.id).length >
  //         0
  //     );

  //     newOperators = pollResult.data.operators.filter(
  //       operator =>
  //         searchResult.data.operators.filter(o => o.id !== operator.id).length >
  //         0
  //     );

  //     searchResult.data.operators.push(...newOperators);
  //     searchResult.data.locations.push(...newLocations);

  //     const departures = searchResult.data.departures.map(departure => ({
  //       departureTime: moment(Date.parse(departure.departure_time)).valueOf(),
  //       arrivalTime: moment(Date.parse(departure.arrival_time)).valueOf(),
  //       duration: departure.duration,
  //       price: departure.prices.total,
  //       currency: departure.prices.currency,
  //       departureCity: searchResult.data.cities.find(
  //         city => city.id === searchResult.data.origin_city_id
  //       ).name,
  //       destinationCity: searchResult.data.cities.find(
  //         city => city.id === searchResult.data.destination_city_id
  //       ).name,
  //       departurePort: searchResult.data.locations.find(
  //         location => location.id === departure.origin_location_id
  //       ).name,
  //       destinationPort: searchResult.data.locations.find(
  //         location => location.id === departure.destination_location_id
  //       ).name,
  //       providerLogo: searchResult.data.operators.find(
  //         operator => operator.id === departure.operator_id
  //       ).logo_url
  //     }));

  //     dispatch({
  //       type: GET_DEPARTURES,
  //       payload: departures
  //     });
  //   }, 1000);
  // } else {
  //   const departures = searchResult.data.departures.map(departure => ({
  //     departureTime: moment(Date.parse(departure.departure_time)).valueOf(),
  //     arrivalTime: moment(Date.parse(departure.arrival_time)).valueOf(),
  //     duration: departure.duration,
  //     price: departure.prices.total,
  //     currency: departure.prices.currency,
  //     departureCity: searchResult.data.cities.find(
  //       city => city.id === searchResult.data.origin_city_id
  //     ).name,
  //     destinationCity: searchResult.data.cities.find(
  //       city => city.id === searchResult.data.destination_city_id
  //     ).name,
  //     departurePort: searchResult.data.locations.find(
  //       location => location.id === departure.origin_location_id
  //     ).name,
  //     destinationPort: searchResult.data.locations.find(
  //       location => location.id === departure.destination_location_id
  //     ).name,
  //     providerLogo: searchResult.data.operators.find(
  //       operator => operator.id === departure.operator_id
  //     ).logo_url
  //   }));

  //   dispatch({
  //     type: GET_DEPARTURES,
  //     payload: departures
  //   });

  //   dispatch({
  //     type: "SET_SEARCH_INITIATED",
  //     searchInitiated: false
  //   });
  //   dispatch({
  //     type: "SET_SEARCH_FINALISED",
  //     searchFinalised: true
  //   });
  // }

  let config = {
    headers: {
      Accept:
        "application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/",
      "X-Busbud-Token": "PARTNER_AHm3M6clSAOoyJg4KyCg7w"
    }
  };

  let searchResult = await axios.get(
    "https://napi.busbud.com/x-departures/f25dvk/dr5reg/2019-08-02?adult=1",
    config
  );

  let lastReceivedDepartures = searchResult.data.departures.length;
  let pollResult, newLocations, newOperators;

  dispatch({
    type: "SET_SEARCH_INITIATED",
    searchInitiated: true
  });
  dispatch({
    type: "SET_SEARCH_FINALISED",
    searchFinalised: false
  });

  if (!searchResult.data.complete) {
    var interval = setInterval(async function() {
      pollResult = await axios.get(
        `https://napi.busbud.com/x-departures/f25dvk/dr5reg/2019-08-02/poll?adult=1&&index=${lastReceivedDepartures}`,
        config
      );
      if (pollResult.data.complete) {
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

      lastReceivedDepartures = pollResult.data.departures.length;

      //update departures,locations,and providers of search result
      searchResult.data.departures.push(...pollResult.data.departures);

      newLocations = pollResult.data.locations.filter(
        location =>
          searchResult.data.locations.filter(o => o.id !== location.id).length >
          0
      );

      newOperators = pollResult.data.operators.filter(
        operator =>
          searchResult.data.operators.filter(o => o.id !== operator.id).length >
          0
      );

      searchResult.data.operators.push(...newOperators);
      searchResult.data.locations.push(...newLocations);

      const departures = searchResult.data.departures.map(departure => ({
        departureTime: moment(Date.parse(departure.departure_time)).valueOf(),
        arrivalTime: moment(Date.parse(departure.arrival_time)).valueOf(),
        duration: departure.duration,
        price: departure.prices.total,
        currency: departure.prices.currency,
        departureCity: searchResult.data.cities.find(
          city => city.id === searchResult.data.origin_city_id
        ).name,
        destinationCity: searchResult.data.cities.find(
          city => city.id === searchResult.data.destination_city_id
        ).name,
        departurePort: searchResult.data.locations.find(
          location => location.id === departure.origin_location_id
        ).name,
        destinationPort: searchResult.data.locations.find(
          location => location.id === departure.destination_location_id
        ).name,
        providerLogo: searchResult.data.operators.find(
          operator => operator.id === departure.operator_id
        ).logo_url
      }));

      dispatch({
        type: GET_DEPARTURES,
        payload: departures
      });
    }, 5000);
  } else {
    const departures = searchResult.data.departures.map(departure => ({
      departureTime: moment(Date.parse(departure.departure_time)).valueOf(),
      arrivalTime: moment(Date.parse(departure.arrival_time)).valueOf(),
      duration: departure.duration,
      price: departure.prices.total,
      currency: departure.prices.currency,
      departureCity: searchResult.data.cities.find(
        city => city.id === searchResult.data.origin_city_id
      ).name,
      destinationCity: searchResult.data.cities.find(
        city => city.id === searchResult.data.destination_city_id
      ).name,
      departurePort: searchResult.data.locations.find(
        location => location.id === departure.origin_location_id
      ).name,
      destinationPort: searchResult.data.locations.find(
        location => location.id === departure.destination_location_id
      ).name,
      providerLogo: searchResult.data.operators.find(
        operator => operator.id === departure.operator_id
      ).logo_url
    }));

    dispatch({
      type: GET_DEPARTURES,
      payload: departures
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
