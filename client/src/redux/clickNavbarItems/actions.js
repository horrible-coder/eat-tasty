import clickNavbarItemsTypes from "./types";

export const openLogin = () => {
  return {
    type: clickNavbarItemsTypes.OPEN_LOGIN,
  };
};

export const closeLogin = () => {
  return {
    type: clickNavbarItemsTypes.CLOSE_LOGIN,
  };
};

export const openSignup = () => {
  return {
    type: clickNavbarItemsTypes.OPEN_SIGNUP,
  };
};

export const closeSignup = () => {
  return {
    type: clickNavbarItemsTypes.CLOSE_SIGNUP,
  };
};

export const openCart = () => {
  return {
    type: clickNavbarItemsTypes.OPEN_CART,
  };
};

export const closeCart = () => {
  return {
    type: clickNavbarItemsTypes.CLOSE_CART,
  };
};

export const userLoggedIn = () => {
  return {
    type: clickNavbarItemsTypes.USER_LOGGED_IN,
  };
};

export const userLoggedOut = () => {
  return {
    type: clickNavbarItemsTypes.USER_LOGGED_OUT,
  };
};
