import { SEARCH_DEPARTURES } from "../actions/types";

const searchReducerDefaultState = [];

const searchReducer = (state = searchReducerDefaultState, action) => {
  switch (action.type) {
    case SEARCH_DEPARTURES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
