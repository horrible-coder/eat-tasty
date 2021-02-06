import cartItemsTypes from "./types";

export const addItemToCart = (menuItem) => {
  return {
    type: cartItemsTypes.ADD_CART_ITEM,
    info: "Action to add a menu item to the cart.",
    payload: menuItem,
  };
};

export const incrementCartItemQuantity = (menuItem) => {
  return {
    type: cartItemsTypes.INCREMENT_QUANTITY,
    info: "Action to increment the quantity of the cart item.",
    payload: menuItem,
  };
};

export const removeItemFromCart = (menuItem) => {
  return {
    type: cartItemsTypes.REMOVE_CART_ITEM,
    info: "Action to remove a menu item from the cart.",
    payload: menuItem,
  };
};

export const decrementCartItemQuantity = (menuItem) => {
  return {
    type: cartItemsTypes.DECREMENT_QUANTITY,
    info: "Action to decrement the quantity of the cart item.",
    payload: menuItem,
  };
};

export const clearCart = () => {
  return {
    type: cartItemsTypes.CLEAR_CART,
    info: "Action to clear the cart.",
  };
};
