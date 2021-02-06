import axios from "axios";

const api = axios.create({
  baseURL: "https://eat-tasty.herokuapp.com/api",
});

const createUser = (payload) => {
  return api.post("/users", payload);
};

const loginUser = (payload) => {
  return api.post("/users/login", payload);
};

const getCities = () => {
  return api.get("/cities");
};

const getLocations = (payload) => {
  return api.get("/locations", {
    params: {
      cityName: payload,
    },
  });
};

const getRestaurants = (payload) => {
  return api.get("/restaurants", {
    params: {
      locationName: payload,
    },
  });
};

const getMenu = (payload) => {
  return api.get("/menu", {
    params: {
      restaurantName: payload,
    },
  });
};

const apis = {
  createUser,
  loginUser,
  getCities,
  getLocations,
  getRestaurants,
  getMenu,
};

export default apis;
