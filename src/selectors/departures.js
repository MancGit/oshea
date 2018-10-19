const getSortedDepartures = (departures, sortBy) => {
  return departures.sort((a, b) => {
    if (sortBy === "earliest") {
      return a.departureTime < b.departureTime ? -1 : 1;
    } else if (sortBy === "latest") {
      return a.departureTime > b.departureTime ? -1 : 1;
    } else if (sortBy === "cheapest") {
      return a.price < b.price ? -1 : 1;
    } else if (sortBy === "fastest") {
      return a.duration < b.duration ? -1 : 1;
    }
  });
};

export default getSortedDepartures;
