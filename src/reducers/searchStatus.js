const searchStatusReducerDefaultState = {
  searchInitiated: false,
  searchFinalised: false
};

const searchStatusReducer = (
  state = searchStatusReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_SEARCH_INITIATED":
      return { ...state, searchInitiated: action.searchInitiated };
    case "SET_SEARCH_FINALISED":
      return { ...state, searchFinalised: action.searchFinalised };
    default:
      return state;
  }
};

export default searchStatusReducer;
