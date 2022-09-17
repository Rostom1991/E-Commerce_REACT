import React from "react";
import classes from "../styles/banner.module.css";

function Banner() {
  return (
    <>
      <div className={classes.container}>
        <section className={classes.leftSection}>
          <h3>Welcome to</h3>
          <h1>Audio House</h1>
          <p>-The best selling audio material website you can find-</p>
        </section>
        <section className={classes.rightSection}>
          <img
            className={classes.img}
            src="https://www.jabra.com/-/media/Images/Products/Jabra-Elite-45h/Product/elite_45e_copperblack_1.png?la=en&hash=6070E0A72070B392F1E6FB17FE7400C54D218E60"></img>
        </section>
      </div>
    </>
  );
}

export default Banner;
