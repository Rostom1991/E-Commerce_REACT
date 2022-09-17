import React, { useContext } from "react";
import classes from "../styles/oneCartItem.module.css";
import { FiDelete } from "react-icons/fi";
import CartContext from "../context/CartContext";

function OneCartItem({ item }) {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const changeQty = (e) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        id: item.id,
        qty: e.target.value,
      },
    });
    console.log("target:", e.target.value);
  };

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { ...item },
    });
  };
  localStorage.setItem("cart", JSON.stringify(cart));

  return (
    <div className={classes.itemRow}>
      <img className={classes.img} src={item.img} />
      <h3>{item.title}</h3>
      <span>${item.price}</span>
      <div>
        <select
          onChange={changeQty}
          value={item.qty}
          className={classes.select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <FiDelete
        className={classes.deleteIcon}
        onClick={handleRemove}
        size={30}
      />
    </div>
  );
}

export default OneCartItem;
