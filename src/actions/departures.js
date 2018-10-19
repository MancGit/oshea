import { GET_DEPARTURES } from "./types";
import axios from "axios";
import moment from "moment";

export const getDepartures = () => async dispatch => {
  const res = await axios.get("FullResponse.json");

  //Processing Response to provide only required values in state
  const departures = res.data.departures.map(departure => ({
    departureTime: moment(Date.parse(departure.departure_time)).valueOf(),
    arrivalTime: moment(Date.parse(departure.arrival_time)).valueOf(),
    duration: departure.duration,
    price: departure.prices.total,
    currency: departure.prices.currency,
    departureCity: res.data.cities.find(
      city => city.id === res.data.origin_city_id
    ).name,
    destinationCity: res.data.cities.find(
      city => city.id === res.data.destination_city_id
    ).name,
    departurePort: res.data.locations.find(
      location => location.id === departure.origin_location_id
    ).name,
    destinationPort: res.data.locations.find(
      location => location.id === departure.destination_location_id
    ).name,
    providerLogo: res.data.operators.find(
      operator => operator.id === departure.operator_id
    ).logo_url
  }));

  dispatch({
    type: GET_DEPARTURES,
    payload: departures
  });
};
