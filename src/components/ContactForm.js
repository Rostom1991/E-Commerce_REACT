import React, { useRef } from "react";
import classes from "../styles/contactForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    await axios
      .post("https://friendly-jacket-fawn.cyclic.app/contact", msg)
      // .post("http://localhost:5000/contact", msg)
      .then((response) => {
        console.log("message sent");
        console.log(response.data);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };
  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1>Send a Message</h1>
        <div className={classes.inputs}>
          <input type="text" placeholder="Full Name.." ref={fullNameRef} />
          <input type="text" placeholder="Email.." ref={emailRef} />
          <textarea placeholder="Type your message.." ref={messageRef} />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
