import React from 'react';
import email from "../../assets/email.gif";

const Contacts = () => {
  return (
    <div style={{height: '500px'}}>
      <h3>Contact us!</h3>
      <div className="d-flex flex-row">
        <div>
          <img src={email} alt="email" style={{width: '200px'}} className="pe-5"/>
        </div>
        <div className="ms-1">
          <form>
            <div className="mb-3">
              <label>Your email</label>
              <input type="email" className="form-control"/>
            </div>
            <div className="mb-3">
              <label>Your message</label>
              <textarea className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Email us!</button>
          </form>
        </div>
        <div className="ms-5">
          <h5>Phone us</h5>
          <p>+123(456)78-910-11</p>
          <p>+123(456)78-910-11 (fax)</p>
        </div>
      </div>

    </div>
  );
};

export default Contacts;