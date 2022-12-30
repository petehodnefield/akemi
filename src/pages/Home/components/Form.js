import React from "react";

const Form = () => {
  return (
    <section className="form-section">
      <div className="margin form">
        <h3 className="m-1">Subscribe</h3>
        <form>
          <div className="form-input-wrapper m-p5">
            <label className="bold m-p25">Email address</label>
            <input
              className="bold form-input"
              required
              maxLength="30"
              type="email"
              name="email"
            ></input>
          </div>
          <button className="btn btn-primary btn-form" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
