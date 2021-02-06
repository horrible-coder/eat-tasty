import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import "./Navbar.scss";
import {
  openCart,
  openLogin,
  openSignup,
  userLoggedOut,
} from "../../redux/clickNavbarItems/actions";
import { clearCart } from "../../redux/cartItems/actions";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cartDetails.totalQuantity);
  const isAuthenticated = useSelector(
    (state) => state.clickNavbarItems.isAuthenticated
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleIsAuthenticated = () => {
    localStorage.clear();
    history.push("/");
    dispatch(userLoggedOut());
    dispatch(clearCart());
  };

  return (
    <div className="navbar">
      <div className="left">
        <h4>
          <Link to="/">Eat Tasty</Link>
        </h4>
      </div>
      <div className="right">
        {isAuthenticated ? (
          <ul>
            <div>
              <LocalMallIcon onClick={() => dispatch(openCart())} />
              <span>{totalQuantity}</span>
            </div>
            <li>{localStorage.getItem("username")}</li>
            <li onClick={handleIsAuthenticated}>Logout</li>
          </ul>
        ) : (
          <ul>
            <div>
              <LocalMallIcon onClick={() => dispatch(openCart())} />
              <span>{totalQuantity}</span>
            </div>
            <li onClick={() => dispatch(openLogin())}>Login</li>
            <li onClick={() => dispatch(openSignup())}>Sign Up</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
