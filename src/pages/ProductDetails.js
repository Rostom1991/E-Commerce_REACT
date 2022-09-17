import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import classes from "../styles/productDetails.module.css";
import CartContext from "../context/CartContext";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductDetails() {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);
  const params = useParams();
  const [product, setProduct] = useState([]);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product },
    });
  };
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { ...product },
    });
  };

  useEffect(() => {
    axios
      .get(`https://friendly-jacket-fawn.cyclic.app/product/${params.id}`)
      // .get(`http://localhost:5000/product/${params.id}`)
      .then((response) => {
        setProduct(response.data);
        console.log("data:", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);
  return (
    <div className={classes.container}>
      <Link to="/">
        <BiArrowBack className={classes.arrow} size={35} />
      </Link>
      <span className={classes.span}>BACK</span>
      <img
        className={classes.undraw}
        src={
          "https://c6manali.com/wp-content/uploads/2019/10/undraw_compose_music_ovo2.svg"
        }></img>
      <div className={classes.item}>
        <section className={classes.imgSection}>
          <img src={product.img}></img>
        </section>
        <section className={classes.detailsSection}>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <p>{product.desc}</p>
          {cart.some((p) => p._id === product._id) ? (
            <button className={classes.btn} onClick={removeFromCart}>
              Remove From Cart
            </button>
          ) : (
            <>
              <button className={classes.btn} onClick={addToCart}>
                Add To Cart
                <AiOutlineShoppingCart size={20} className={classes.cartIcon} />
              </button>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default ProductDetails;
