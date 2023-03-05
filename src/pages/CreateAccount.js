import React from "react";
import "../styles/Login.css";
import {Link} from "react-router-dom"


function CreateAccount() {
  return (
    <div className="login">      
      <form id="register-form" method="POST">
        <h1>Create Account</h1>
        <label htmlFor="new-username">Username</label>
        <input name="new-username" placeholder="Enter username..." type="text" />
        <label htmlFor="new-password">Password</label>
        <input name="new-password" placeholder="Enter password..." type="password" />        
        <Link to="/login">
          <button type="submit">Register</button>
        </Link>
      </form>
    </div>
  );
}

export default CreateAccount;
