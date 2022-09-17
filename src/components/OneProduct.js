import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import classes from "../styles/oneProduct.module.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function OneProduct({ oneProduct }) {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...oneProduct },
    });
  };
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { ...oneProduct },
    });
  };

  // const goToDetails = () => {
  //   navigate("/product/:id");
  // };

  return (
    <div className={classes.card}>
      <Link to={"/product/" + oneProduct._id} className={classes.link}>
        <img src={oneProduct.img} className={classes.img} alt="head" />
      </Link>
      <p className={classes.title}>{oneProduct.title}</p>
      <h6 className={classes.price}>${oneProduct.price}</h6>
      {cart.some((p) => p._id === oneProduct._id) ? (
        <button
          style={{ paddingLeft: "0.5rem" }}
          className={classes.btn}
          onClick={removeFromCart}>
          Remove From Cart
        </button>
      ) : (
        <button className={classes.btn} onClick={addToCart}>
          Add To Cart
          <AiOutlineShoppingCart size={19} className={classes.cartIcon} />
        </button>
      )}
      {/* {console.log("cart", cart)} */}
    </div>
  );
}

export default OneProduct;
