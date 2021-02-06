import { combineReducers } from "redux";
import restaurantListReducer from "./restaurantList/reducer";
import menuReducer from "./menuList/reducer";
import cartItemsReducer from "./cartItems/reducer";
import clickNavbarItemsReducer from "./clickNavbarItems/reducer";

const rootReducer = combineReducers({
  restaurantList: restaurantListReducer,
  menu: menuReducer,
  cartDetails: cartItemsReducer,
  clickNavbarItems: clickNavbarItemsReducer,
});

export default rootReducer;
