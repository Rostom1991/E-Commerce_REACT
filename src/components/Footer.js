import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import classes from "../styles/footer.module.css";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.contain}>
        <div className={classes.icons}>
          <a href="https://www.facebook.com" target="_blank">
            <BsFacebook size={27} className={classes.icon} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <AiFillInstagram size={35} className={classes.icon} />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <AiOutlineTwitter size={35} className={classes.icon} />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <BsYoutube size={35} className={classes.icon} />
          </a>
        </div>
        <div>
          <p>
            <span>&copy;</span> 2022 Media House, Tunisia. All rights reserved.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
