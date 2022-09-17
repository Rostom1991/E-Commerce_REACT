import React from "react";
import OneCartItem from "./OneCartItem";

function CartItems({ products }) {
  return (
    <div>
      {products.map((item) => {
        return (
          <div>
            <OneCartItem item={item} key={item._id} />
          </div>
        );
      })}
    </div>
  );
}

export default CartItems;
