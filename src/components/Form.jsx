import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import "./Form.css";
function Form({ handleChange, handleState }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleState();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="name">
        <label htmlFor="">CARDHOLDER NAME</label>
        <FormInput
          type={"text"}
          placeholder={"e.g. Ashutosh Mohanty"}
          pattern={"^[a-zA-Z]+ [a-zA-Z]+$"}
          required={true}
          errorMessage={"*Must enter your full name!"}
          handleChange={handleChange}
          name={"name"}
        />
      </div>
      <div className="number">
        <label htmlFor="">CARD NUMBER</label>
        <FormInput
          type={"text"}
          placeholder={"e.g. 1234 5678 9000 0000"}
          required={true}
          pattern={"^[0-9+ /s]{19}$"}
          errorMessage={"Must be 16 digits long "}
          handleChange={handleChange}
          name={"number"}
          maxLength={"19"}
        />
      </div>

      <div className="form__cvc--and--dates">
        <section className="dates">
          <label htmlFor="">EXP. DATE (MM/YY)</label>
          <span className="dates__inputs">
            <FormInput
              type={"text"}
              placeholder={"MM"}
              pattern={"^[0-9]{2}$"}
              required={true}
              errorMessage={"*Must be valid!"}
              name={"month"}
              handleChange={handleChange}
            />
            <FormInput
              type={"text"}
              placeholder={"YY"}
              pattern={"^[0-9]{2}$"}
              required={true}
              errorMessage={"*Must be valid!"}
              name={"year"}
              handleChange={handleChange}
            />
          </span>
        </section>

        <section className="cvc">
          <label htmlFor="">CVC</label>
          <FormInput
            type={"text"}
            placeholder={"e.g. 123"}
            pattern={"^[0-9]{3}$"}
            required={true}
            errorMessage={"*Must be valid!"}
            name={"cvc"}
            maxLength={"3"}
            handleChange={handleChange}
          />
        </section>
      </div>

      <button>Confirm</button>
    </form>
  );
}

export default Form;
