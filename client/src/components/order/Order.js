import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import greenTick from "../../assets/greenTick.png";
import { clearCart } from "../../redux/cartItems/actions";
import "./Order.scss";

function Order() {
  const cart = useSelector((state) => state.cartDetails.cartDetails);
  const totalPrice = useSelector((state) => state.cartDetails.totalPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Order">
      <div className="orderDetails">
        <img src={greenTick} alt="success"></img>
        <h2 className="orderConfirmationText">We've received your order</h2>
        <h3>Delivery Details</h3>
        <p>{localStorage.getItem("username")}</p>
        <p>Contact No. - 8089320231</p>
        <p>T/23, Connaught Place, New Delhi, India </p>

        <h3>Order Summary</h3>
        {cart.length && (
          <div>
            {cart.map((cartItem, index) => (
              <div className="orderSummaryContainer" key={cartItem._id}>
                <p className="serialNo">{index + 1}.</p>
                <p className="orderItemName">{cartItem.name}</p>
                <p className="setOrderItemQuantity">x {cartItem.quantity}</p>
                <p className="orderItemPrice">
                  Rs. {(cartItem.price * cartItem.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <h3 className="subTotal">
              Sub Total: <span>Rs. {totalPrice.toFixed(2)}</span>
            </h3>
          </div>
        )}
        <h3>Payment Method</h3>
        <p>Cash On Delivery</p>
        <Link to="/">
          <button onClick={() => dispatch(clearCart())}>Back To Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Order;
