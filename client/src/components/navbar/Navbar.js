import React, { useState } from "react";
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
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [menu, setMenu] = useState(false);

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
            {menu ? (
              <>
                <div className="dropdown-items">
                  <li>{localStorage.getItem("username")}</li>
                  <li onClick={handleIsAuthenticated}>Logout</li>
                </div>

                <CloseIcon id="close" onClick={() => setMenu(false)} />
              </>
            ) : (
              <>
                <div className="navbar-items">
                  <li>{localStorage.getItem("username")}</li>
                  <li onClick={handleIsAuthenticated}>Logout</li>
                </div>
                <MenuIcon id="hamburger-menu" onClick={() => setMenu(true)} />
              </>
            )}
          </ul>
        ) : (
          <ul>
            <div>
              <LocalMallIcon onClick={() => dispatch(openCart())} />
              <span>{totalQuantity}</span>
            </div>

            {menu ? (
              <>
                <div className="dropdown-items">
                  <li onClick={() => dispatch(openLogin())}>Login</li>
                  <li onClick={() => dispatch(openSignup())}>Sign Up</li>
                </div>
                <CloseIcon id="close" onClick={() => setMenu(false)} />
              </>
            ) : (
              <>
                <div className="navbar-items">
                  <li onClick={() => dispatch(openLogin())}>Login</li>
                  <li onClick={() => dispatch(openSignup())}>Sign Up</li>
                </div>
                <MenuIcon id="hamburger-menu" onClick={() => setMenu(true)} />
              </>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
