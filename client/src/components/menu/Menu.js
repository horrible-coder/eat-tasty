import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Menu.scss";
import NonVegIcon from "../../assets/nonveg.png";
import VegIcon from "../../assets/veg.png";
import { addItemToCart } from "../../redux/cartItems/actions";
import { openCart, openLogin } from "../../redux/clickNavbarItems/actions";
import { Link } from "react-router-dom";

function Menu() {
  const menu = useSelector((state) => state.menu.menu);
  const cart = useSelector((state) => state.cartDetails.cartDetails);
  const totalPrice = useSelector((state) => state.cartDetails.totalPrice);
  const isAuthenticated = useSelector(
    (state) => state.clickNavbarItems.isAuthenticated
  );
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Menu">
      {menu.map((menuItem) => (
        <div className="menuContainer" key={menuItem._id}>
          <img
            src={menuItem.nonVeg === true ? NonVegIcon : VegIcon}
            alt="Veg/ NonVeg Icon"
          ></img>
          <div className="menuItemDetails">
            <p className="menuItemName">{menuItem.name}</p>
            <p className="menuItemPrice">Rs. {menuItem.price.toFixed(2)}</p>
          </div>
          <button
            className="addToCartButton"
            onClick={() => dispatch(addItemToCart(menuItem))}
          >
            Add to bag
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="proceedFooter">
          <h3>
            <span>Sub Total: </span>Rs. {totalPrice.toFixed(2)}
          </h3>
          <button onClick={() => dispatch(openCart())}>View Bag</button>
          {isAuthenticated ? (
            <Link to="/order">
              <button>Place Order</button>
            </Link>
          ) : (
            <button onClick={() => dispatch(openLogin())}>Place Order</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Menu;
