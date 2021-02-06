import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Restaurants.scss";
import { fetchMenu } from "../../redux/menuList/actions";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

function Restaurants() {
  const restaurants = useSelector(
    (state) => state.restaurantList.restaurantList
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  return (
    <div className="Restaurant">
      {restaurants.map((restaurant) => (
        <Link to="/menu" key={restaurant._id}>
          <div
            className="restaurantContainer"
            onClick={() => dispatch(fetchMenu(restaurant.name))}
          >
            <img src={restaurant.imageUrl} alt={restaurant.name}></img>
            <div className="restaurantDetails">
              <h2>{restaurant.name}</h2>
              <p>
                {restaurant.category.map((category, index) => (
                  <span key={index}>{(index ? ", " : "") + category}</span>
                ))}
              </p>

              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={restaurant.ratings} readOnly />
              </Box>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Restaurants;
