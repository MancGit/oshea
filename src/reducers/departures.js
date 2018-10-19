const departuresReducerDefaultState = [];

const departuresReducer = (state = departuresReducerDefaultState, action) => {
  switch (action.type) {
    case "GET_DEPARTURES":
      return action.payload;
    default:
      return state;
  }
};

export default departuresReducer;
