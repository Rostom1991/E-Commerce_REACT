import React from "react";
import ContactForm from "../components/ContactForm";
import classes from "../styles/contact.module.css";
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <section className={classes.contact}>
          <h1>CONTACT US</h1>
          <p>
            {" "}
            To contact us, here is our address, phone number and email. or the
            form down below, you can fill it and send a message!
          </p>
        </section>
        <div className={classes.bothSections}>
          <section className={classes.leftSection}>
            <div className={classes.logoAndSpan}>
              <div className={classes.iconBg}>
                <GoLocation size={23} className={classes.icon} />
              </div>
              <div className={classes.iconsContact}>
                <span>Address</span>
                <p>8050 Hammamet, Tunisia</p>
              </div>
            </div>
            <div className={classes.logoAndSpan}>
              <div className={classes.iconBg}>
                <AiOutlinePhone size={35} className={classes.icon} />
              </div>
              <div className={classes.iconsContact}>
                <span>Phone</span>
                <p>+21620192602</p>
              </div>
            </div>
            <div className={classes.logoAndSpan}>
              <div className={classes.iconBg}>
                <AiOutlineMail size={35} className={classes.icon} />
              </div>
              <div className={classes.iconsContact}>
                <span>Email</span>
                <p>mediahouse@gmail.com</p>
              </div>
            </div>
          </section>
          <section className={classes.rightSection}>
            <ContactForm />
          </section>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
