import React from "react";
import { useLogout } from "../hooks/useLogout";
import classes from "../styles/logoutModal.module.css";

function LogoutModal({ closeModal }) {
  const { logout } = useLogout();
  const handleConfirm = () => {
    closeModal(false);
    return logout();
  };

  const handleCancel = () => {
    closeModal(false);
  };
  return (
    <div className={classes.container}>
      <h3 className={classes.message}>Are you sure to Log Out?</h3>
      <div className={classes.buttons}>
        <button onClick={handleConfirm}>Yes</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default LogoutModal;
