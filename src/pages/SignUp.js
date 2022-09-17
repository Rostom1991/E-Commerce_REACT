import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineUserAdd,
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { Si1Password } from "react-icons/si";
import classes from "../styles/signup.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function SignUp() {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleShowPassword() {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  }
  function handleConfirmPassword() {
    showConfirmPassword
      ? setShowConfirmPassword(false)
      : setShowConfirmPassword(true);
  }

  const submitSignUp = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return alert("Password doesn't match");
    } else {
      const user1 = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      await axios
        .post("http://localhost:5000/auth/signup", user1)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);

            console.log("response 2000000");
            //save user to local storage
            localStorage.setItem("user", JSON.stringify(response.data));
            //update the Auth Context
            dispatch({ type: "LOGIN", payload: response.data });
            console.log({ state });
            navigate("/", { replace: true });
          }
        })
        .catch(function (error) {
          console.log(error.response.data.error);
          setError(error.response.data.error);
        });
    }
  };

  return (
    <div className={classes.signup}>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={submitSignUp}>
          <h2>Sign Up</h2>
          <div className={classes.username}>
            <AiOutlineUserAdd className={classes.icons} size={30} />
            <input
              type="text"
              placeholder="Username.."
              ref={usernameRef}
              required
            />
          </div>
          <div className={classes.email}>
            <AiOutlineMail className={classes.icons} size={30} />
            <input type="text" placeholder="Email.." ref={emailRef} required />
          </div>
          <div className={classes.password}>
            <Si1Password className={classes.icons} size={30} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password.."
              ref={passwordRef}
              required
              className={classes.password}
            />
            {!showPassword ? (
              <AiOutlineEyeInvisible
                onClick={handleShowPassword}
                className={classes.invisible}
              />
            ) : (
              <AiOutlineEye
                onClick={handleShowPassword}
                className={classes.invisible}
              />
            )}
          </div>
          <div className={classes.password}>
            <Si1Password className={classes.icons} size={30} />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password.."
              ref={confirmPasswordRef}
              required
              className={classes.confirmPwd}
            />
            {!showConfirmPassword ? (
              <AiOutlineEyeInvisible
                onClick={handleConfirmPassword}
                className={classes.invisible}
              />
            ) : (
              <AiOutlineEye
                onClick={handleConfirmPassword}
                className={classes.invisible}
              />
            )}
          </div>
          <div>
            <button className={classes.signupBtn}>Sign Up</button>
            <p className={classes.login}>
              Already have an account?{" "}
              <span>
                <Link to="/login">"LOGIN"</Link>
              </span>
            </p>
          </div>
          <div>{error && <div className={classes.error}>{error}!</div>}</div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
