import moment from "moment";

const getDepartures = (searchResult, sortBy) => {
  const departures = searchResult.departures.map(departure => ({
    departureTime: moment(Date.parse(departure.departure_time)).valueOf(),
    arrivalTime: moment(Date.parse(departure.arrival_time)).valueOf(),
    duration: departure.duration,
    price: departure.prices.total,
    currency: departure.prices.currency,
    departureCity: searchResult.cities.find(
      city => city.id === searchResult.origin_city_id
    ).name,
    destinationCity: searchResult.cities.find(
      city => city.id === searchResult.destination_city_id
    ).name,
    departurePort: searchResult.locations.find(
      location => location.id === departure.origin_location_id
    ).name,
    destinationPort: searchResult.locations.find(
      location => location.id === departure.destination_location_id
    ).name,
    providerLogo: searchResult.operators.find(
      operator => operator.id === departure.operator_id
    ).logo_url
  }));

  return departures.sort((a, b) => {
    switch (sortBy) {
      case "earliest":
        return a.departureTime < b.departureTime ? -1 : 1;
      case "latest":
        return a.departureTime > b.departureTime ? -1 : 1;
      case "cheapest":
        return a.price < b.price ? -1 : 1;
      case "fastest":
        return a.duration < b.duration ? -1 : 1;
      default:
        return a.departureTime < b.departureTime ? -1 : 1;
    }
  });
};

export default getDepartures;
