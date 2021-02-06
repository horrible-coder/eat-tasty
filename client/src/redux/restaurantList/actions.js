import restaurantListTypes from "./types";
import apis from "../../api/index";

export const fetchRestaurantList = (location) => {
  return async (dispatch) => {
    try {
      await apis.getRestaurants(location).then((res) =>
        dispatch({
          type: restaurantListTypes.FETCH_RESTAURANT_LIST,
          info: "Action to fetch the list of restaurants.",
          payload: res.data.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
