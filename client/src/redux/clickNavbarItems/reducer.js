import clickNavbarItemsTypes from "./types";

const INITIAL_STATE = {
  login: false,
  signup: false,
  cart: false,
  isAuthenticated: false,
};

const clickNavbarItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case clickNavbarItemsTypes.OPEN_LOGIN:
      return {
        ...state,
        login: true,
        signup: false,
        cart: false,
      };
    case clickNavbarItemsTypes.CLOSE_LOGIN:
      return {
        ...state,
        login: false,
      };
    case clickNavbarItemsTypes.OPEN_SIGNUP:
      return {
        ...state,
        login: false,
        signup: true,
        cart: false,
      };
    case clickNavbarItemsTypes.CLOSE_SIGNUP:
      return {
        ...state,
        signup: false,
      };
    case clickNavbarItemsTypes.OPEN_CART:
      return {
        ...state,
        login: false,
        signup: false,
        cart: true,
      };
    case clickNavbarItemsTypes.CLOSE_CART:
      return {
        ...state,
        cart: false,
      };
    case clickNavbarItemsTypes.USER_LOGGED_IN:
      return {
        ...state,
        login: false,
        signup: false,
        isAuthenticated: true,
      };
    case clickNavbarItemsTypes.USER_LOGGED_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default clickNavbarItemsReducer;
