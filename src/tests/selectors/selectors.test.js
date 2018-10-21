import getDepartures from "../../selectors/departures";
import { search } from "../fixtures/search";
import { departures } from "../fixtures/departures";

test("Should process and sort departures by departure date to get earliest", () => {
  const sortBy = "earliest";

  const result = getDepartures(search.payload, sortBy);

  expect(result).toEqual([departures[0], departures[1], departures[2]]);
});

test("Should process and sort departures by departure date to get latest", () => {
  const sortBy = "latest";

  const result = getDepartures(search.payload, sortBy);

  expect(result).toEqual([departures[2], departures[1], departures[0]]);
});

test("Should process and sort departures by departure date to get cheapest", () => {
  const sortBy = "cheapest";

  const result = getDepartures(search.payload, sortBy);

  expect(result).toEqual([departures[1], departures[0], departures[2]]);
});

test("Should process and sort departures by departure date to get fastest", () => {
  const sortBy = "fastest";

  const result = getDepartures(search.payload, sortBy);

  expect(result).toEqual([departures[1], departures[2], departures[0]]);
});
