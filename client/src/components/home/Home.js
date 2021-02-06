import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRestaurantList } from "../../redux/restaurantList/actions";
import apis from "../../api";
import "./Home.scss";

function Home() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);

  const dispatch = useDispatch();

  const handleCity = async (event) => {
    const city = event.target.value;
    setCity(city);
    getLocations(city);
  };

  const handleLocation = async (event) => {
    const location = event.target.value;
    setLocation(location);
  };

  const getCities = async () => {
    await apis
      .getCities()
      .then((res) => {
        setCities(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getLocations = async (city) => {
    await apis
      .getLocations(city)
      .then((res) => {
        setLocations(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <div className="headingText">
          <h2>Order Food Online</h2>
          <p>From the best restaurants near you</p>
        </div>
        <div className="searchRestaurantBox">
          <div className="searchRestaurantUsingLocation">
            <select id="city" value={city} onChange={handleCity}>
              <option>City</option>
              {cities.map((city) => (
                <option key={city._id}>{city.name}</option>
              ))}
            </select>
            <select id="location" value={location} onChange={handleLocation}>
              <option>Location</option>
              {locations.map((location) => (
                <option key={location._id}>{location.name}</option>
              ))}
            </select>
            <button onClick={() => dispatch(fetchRestaurantList(location))}>
              <Link to="/restaurants">Search</Link>
            </button>
          </div>
          {/* <div className="horizontalLine">
            <div className="leftHorizontalLine"></div>
            <p className="orText">Or</p>
            <div className="rightHorizontalLine"></div>
          </div>
          <div className="searchRestaurant">
            <input id="restaurant" type="text" placeholder="Restaurant"></input>
            <button>
              <Link to="/menu">Search</Link>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
