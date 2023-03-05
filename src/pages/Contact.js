import React from "react";
import logo1 from "../assets/logo2.svg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${logo1})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <div className="container">
          <form
            target="_blank"
            action="https://formsubmit.co/raah19ls@student.ju.se"
            method="POST"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-pill"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-pill"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control rounded"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-dark btn-block">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
