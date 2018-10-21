import { SET_SORT_BY } from "../actions/types";

const filtersReducerDefaultState = { sortBy: "earliest" };

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
};

export default filtersReducer;
