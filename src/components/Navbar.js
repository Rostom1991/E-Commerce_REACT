import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/navbar.module.css";
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
} from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";

import CartContext from "../context/CartContext";
import { useLogout } from "../hooks/useLogout";
import { AuthContext } from "../context/AuthContext";
import LogoutModal from "./LogoutModal";

function Navbar() {
  const [spinner, setSpinner] = useState(false);
  const { state, dispatch } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };
  if (spinner) {
    return (
      <ClipLoader className={classes.spinner} loading={spinner} size={35} />
    );
  }
  return (
    <header className={classes.header}>
      <h3 className={classes.logo}>
        <Link to="/">Audio House</Link>
      </h3>
      <nav>
        <ul>
          <li>
            <Link to="/products" className={classes.link}>
              Products
            </Link>
          </li>
          <li>
            Categories
            <ul className={classes.dropdown}>
              <Link to="/products/headphones">
                <li>Headphones</li>
              </Link>
              <Link to="/products/earphones">
                <li>Earphones</li>
              </Link>

              <Link to="/products/speakers">
                <li>Speakers</li>
              </Link>
            </ul>
          </li>
          <li>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={classes.icons}>
        {/* LOGOUT */}

        {user ? (
          <>
            <span className={classes.username}>{user.username}</span>
            {/* {console.log(user.username)} */}
            <div className={classes.signin}>
              <Link to="/">
                <AiOutlineUserDelete
                  onClick={handleLogout}
                  size="2.5rem"
                  className={classes.iconItem}
                />
              </Link>
              <span>LOGOUT</span>
              {openModal && <LogoutModal closeModal={setOpenModal} />}
            </div>
          </>
        ) : (
          <div className={classes.signin}>
            <Link to="/signup">
              <AiOutlineUserAdd size="2.5rem" className={classes.iconItem} />
            </Link>
            <span>SIGNUP</span>
          </div>
        )}
        <>
          <div className={classes.cart}>
            <Link to="/cart">
              <AiOutlineShoppingCart
                size="2.5rem"
                className={classes.iconItem}
              />

              {state.cart.length > 0 && (
                <span className={classes.cartTotal}>{state.cart.length}</span>
              )}
              {/* {JSON.parse(localStorage.getItem("cart"))} */}
            </Link>
            <span>CART</span>
          </div>
        </>
      </div>
    </header>
  );
}

export default Navbar;
