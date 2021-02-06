import apis from "../../api/index";
import menuTypes from "./types";

export const fetchMenu = (restaurant) => {
  //console.log(restaurant);
  return async (dispatch) => {
    try {
      await apis.getMenu(restaurant).then((res) => {
        dispatch({
          type: menuTypes.FETCH_MENU,
          info: "Action to fetch the menu of the restaurant.",
          payload: res.data.data,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
};
