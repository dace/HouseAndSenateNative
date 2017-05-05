const initialState = {
  house: [],
  senate: [],
  selected: [],
};

const membersReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_ALL_SENATE_MEMBERS':
      return {
        ...state,
        senate: action.payload,
      }
    default:
      return state;
  }
};

export default membersReducer;