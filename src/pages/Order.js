import axios from "axios";
import React, { useContext, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutModal from "../components/CheckoutModal";
import CartContext from "../context/CartContext";
import classes from "../styles/order.module.css";

function Order() {
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const {
    state: { cart, total },
  } = useContext(CartContext);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(localStorage.getItem("user"));
    const order = {
      username: localStorage.getItem("user"),
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      zipCode: zipCodeRef.current.value,
      products: cart,
      amount: total,
    };
    console.log("order", order);
    //module de paiement ...
    await axios
      .post("http://localhost:5000/order", order)
      .then((response) => {
        console.log("success", response.data);
        setCheckoutModal(true);
      })
      .catch((error) => {
        console.log("error", error.message);
        setError(error.response.data.error);
      });
  };
  const [checkoutModal, setCheckoutModal] = useState(false);

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formSection}>
          <section className={classes.fullName}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              placeholder="First Name.."
              id="firstName"
              ref={firstNameRef}
              required
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              placeholder="Last Name.."
              id="lastName"
              ref={lastNameRef}
              required
            />
          </section>
          <section>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              placeholder="Phone Number.."
              id="phone"
              ref={phoneRef}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="Email.."
              id="email"
              ref={emailRef}
            />
          </section>
          <section>
            <label htmlFor="address">Street Address:</label>
            <input
              type="text"
              placeholder="Street Address.."
              id="address"
              ref={addressRef}
              required
            />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              placeholder="City.."
              id="city"
              ref={cityRef}
              required
            />
          </section>
          <section className={classes.zip}>
            <label htmlFor="zip">Zip Code:</label>
            <input
              type="text"
              placeholder="Zip Code.."
              id="zip"
              ref={zipCodeRef}
            />
            {error && <span>{error}</span>}
          </section>
        </div>
        <div className={classes.productSection}>
          <section>
            {/* <h3>Products</h3> */}
            <h5>{console.log({ total })}</h5>
            {/* <h5>{console.log({ cart })}</h5> */}
            {cart.map((e) => {
              return (
                <div className={classes.product}>
                  <img src={e.img} />
                  <h4>{e.title}</h4>
                  <h3>x{e.qty}</h3>
                  {console.log("e:", e)}
                </div>
              );
            })}
            {/* <h5>{cart.length}</h5> */}
            <div className={classes.totalCheckout}>
              <h2>Total:${total}</h2>
              <span className={classes.cash}>Cash On Delivery!</span>
              <br /> <br />
              {!checkoutModal && <button>Finish Checkout</button>}
            </div>
          </section>
        </div>
      </form>
      <>{checkoutModal && <CheckoutModal />}</>
    </>
  );
}

export default Order;
