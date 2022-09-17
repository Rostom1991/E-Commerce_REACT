import React from "react";
import classes from "../styles/checkoutModal.module.css";

function CheckoutModal() {
  return (
    <div className={classes.container}>
      <h1 className={classes.thanks}>Thank You For Your Order!</h1>
      <h3 className={classes.contact}>
        We will contact you in a couple of days...
      </h3>
      <h2 className={classes.logo}>Audio House</h2>
    </div>
  );
}

export default CheckoutModal;
