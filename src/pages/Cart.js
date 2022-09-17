import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "../components/CartItems";
import CartContext from "../context/CartContext";
import classes from "../styles/oneCartItem.module.css";
import { AuthContext } from "../context/AuthContext";
// import { Alert, Button } from "antd";
// import "antd/dist/antd.css";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  let content;
  if (cart.length === 0) {
    content = <p style={{ textAlign: "center" }}>Cart is Empty!</p>;
  } else {
    content = <CartItems products={cart} />;
  }
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const proceedCheckout = () => {
    if (user) {
      navigate("/order", { relpace: true });
      dispatch({
        type: "UPDATE_TOTAL",
        payload: total,
      });
    } else {
      // alert("log in first");

      alert("You should Log In to checkout!");
      navigate("/signup");
    }
  };
  return (
    <div className={classes.cartContainer}>
      <div>{content}</div>
      <div className={classes.totalBtn}>
        {total > 0 && (
          <>
            <button className={classes.buyBtn} onClick={proceedCheckout}>
              Checkout
            </button>
            <span style={{ fontSize: "2rem", fontFamily: "poppins" }}>
              Total: ${total}{" "}
            </span>
          </>
        )}
      </div>
      {/* {context.cartItemsTotal} */}

      {/* <span>Total: {totalPrice}</span> */}
    </div>
  );
}

export default Cart;
