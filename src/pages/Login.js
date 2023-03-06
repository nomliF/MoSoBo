import React from "react";
import "../styles/Login.css";
import {Link} from "react-router-dom"


function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form id="login-form" method="POST">
        <label htmlFor="username">Username</label>
        <input name="username" placeholder="Enter username..." type="text" />
        <label htmlFor="password">Password</label>
        <input name="password" placeholder="Enter password..." type="password" />
        <button type="submit">Login</button>
        <Link to="/createAccount">
          <button> Create Account </button>
        </Link>
      </form>
      
    </div>
  );
}

export default Login;