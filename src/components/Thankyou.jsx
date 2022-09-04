import React from "react";
import THANKYOU_LOGO from "../assets/icon-complete.svg";
import "./Thankyou.css";

function Thankyou({ handleContinue }) {
  return (
    <>
      <div className="thankyou__section">
        <div className="check_icon">
          <img src={THANKYOU_LOGO} alt="icon-complete" />
        </div>
        <h2>Thank You !</h2>
        <p>We've added your card details</p>
        <button className="btn" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </>
  );
}

export default Thankyou;
