import {
  addItemToCart,
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  removeItemFromCart,
} from "./utils";
import cartItemsTypes from "./types";

const INITIAL_STATE = {
  cartDetails: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartItemsTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartDetails: addItemToCart(state.cartDetails, action.payload),
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case cartItemsTypes.INCREMENT_QUANTITY:
      return {
        ...state,
        cartDetails: incrementCartItemQuantity(
          state.cartDetails,
          action.payload
        ),
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case cartItemsTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartDetails: removeItemFromCart(state.cartDetails, action.payload),
        totalQuantity: state.totalQuantity - action.payload.quantity,
        totalPrice:
          state.totalPrice - action.payload.price * action.payload.quantity,
      };
    case cartItemsTypes.DECREMENT_QUANTITY:
      return {
        ...state,
        cartDetails: decrementCartItemQuantity(
          state.cartDetails,
          action.payload
        ),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    case cartItemsTypes.CLEAR_CART:
      return {
        ...state,
        cartDetails: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export default cartItemsReducer;
