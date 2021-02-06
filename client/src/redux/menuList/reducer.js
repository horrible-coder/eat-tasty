import menuTypes from "./types";

const INITIAL_STATE = {
  menu: [],
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case menuTypes.FETCH_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
