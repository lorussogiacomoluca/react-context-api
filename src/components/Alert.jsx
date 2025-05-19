import React from "react";
import { useAlertContext } from "../contexts/AlertContext";

const Alert = () => {
  const { alertData } = useAlertContext();
  const { type, message } = alertData;

  // Se non c'è messaggio, non renderizzare nulla
  if (!alertData.message) return null;

  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
    >
      <p>{message}</p>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
