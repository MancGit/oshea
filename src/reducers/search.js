const searchReducerDefaultState = [];

const searchReducer = (state = searchReducerDefaultState, action) => {
  switch (action.type) {
    case "SEARCH_DEPARTURES":
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
