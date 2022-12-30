import { useState, useEffect, useRef } from "react";
import React from "react";

const Form = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [message, setMessage] = useState(
    "thank you for joining my newsletter ❤️  "
  );
  const formRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    formRef.current?.reset();
    setFormSubmit(true);
    // reset message
    setTimeout(() => {
      setMessage("");
    }, 6000);
  };

  return (
    <section className="form-section">
      <div className="margin form">
        <h3 className="m-1">Subscribe</h3>
        <form ref={formRef} id="form" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="form-input-wrapper m-p5">
            <label className="bold m-p25">Email address</label>
            <input
              className="bold form-input"
              required
              maxLength="30"
              minLength="6"
              type="email"
              name="email"
            ></input>
          </div>
          <button className="btn btn-primary btn-form" type="submit">
            Submit
          </button>
        </form>
        {formSubmit && message ? (
          <p className="p2 form-message">{message}</p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Form;
