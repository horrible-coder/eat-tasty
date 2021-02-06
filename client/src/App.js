import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Restaurants from "./components/restaurants/Restaurants";
import Menu from "./components/menu/Menu";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Order from "./components/order/Order";

function App() {
  const login = useSelector((state) => state.clickNavbarItems.login);
  const signup = useSelector((state) => state.clickNavbarItems.signup);
  const cart = useSelector((state) => state.clickNavbarItems.cart);
  return (
    <Router>
      <div className="App">
        <div
          className="mainContent"
          style={login || signup || cart ? { opacity: 0.08 } : { opacity: 1 }}
        >
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* 
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} /> */}
            <Route path="/restaurants" exact component={Restaurants} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/order" exact component={Order} />
          </Switch>
        </div>
        <div className="form">
          {login && <Login />}
          {signup && <Signup />}
          {cart && <Cart />}
        </div>
      </div>
    </Router>
  );
}

export default App;
