import React from "react";
import "./Spinner.scss";

export default function Spinner() {
  return (
    <div className="center">
      <div className="spinner">
        <div className="spinner_double-bounce1"></div>
        <div className="spinner_double-bounce2"></div>
      </div>
    </div>
  );
}
