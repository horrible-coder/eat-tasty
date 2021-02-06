import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import "./Cart.scss";
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  removeItemFromCart,
} from "../../redux/cartItems/actions";
import { closeCart } from "../../redux/clickNavbarItems/actions";

function Cart() {
  const cart = useSelector((state) => state.cartDetails.cartDetails);
  const totalPrice = useSelector((state) => state.cartDetails.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Cart">
      <CloseIcon onClick={() => dispatch(closeCart())} />
      {cart.length ? (
        <div>
          <h2>My Cart</h2>
          {cart.map((cartItem) => (
            <div className="cartContainer" key={cartItem._id}>
              <p className="cartItemName">{cartItem.name}</p>
              <RemoveCircleOutlineIcon
                onClick={() => dispatch(decrementCartItemQuantity(cartItem))}
              />
              <p className="setCartItemQuantity">{cartItem.quantity}</p>
              <AddCircleOutlineIcon
                onClick={() => dispatch(incrementCartItemQuantity(cartItem))}
              />
              <p className="rs">Rs. </p>
              <p className="cartItemPrice">
                {(cartItem.price * cartItem.quantity).toFixed(2)}
              </p>
              <DeleteIcon
                className="deleteIcon"
                onClick={() => dispatch(removeItemFromCart(cartItem))}
              />
            </div>
          ))}
          <h3>
            Sub Total: <span>Rs. {totalPrice.toFixed(2)}</span>
          </h3>
        </div>
      ) : (
        <div className="emptyCart">
          <h2>Your bag is empty.</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
