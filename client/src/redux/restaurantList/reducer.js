import restaurantListTypes from "./types";

const INITIAL_STATE = {
  restaurantList: [],
};

const restaurantListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case restaurantListTypes.FETCH_RESTAURANT_LIST: {
      return {
        ...state,
        restaurantList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default restaurantListReducer;
