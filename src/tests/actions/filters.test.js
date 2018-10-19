import { setSortBy } from "../../actions/filters";
import { SET_SORT_BY } from "../../actions/types";

test("Should setup setSortBy action object", () => {
  const sortBy = "earliest";
  const action = setSortBy(sortBy);

  expect(action).toEqual({
    type: SET_SORT_BY,
    sortBy
  });
});
