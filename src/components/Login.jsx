import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const emailref = useRef();
  const passres = useRef();
  const users = JSON.parse(localStorage.getItem("users")) || {};
  const a = useNavigate();
  const handlelogin = (e) => {
    e.preventDefault();
    const email = emailref.current.value;
    const password = passres.current.value;
    if (users[email]) {
      if (users[email].password === password) {
        alert("login successful");
        sessionStorage.setItem(
          "loggedin",
          JSON.stringify({ email: email, username: users[email].username })
        );
        a("/");
      } else {
        alert("invalid password");
      }
    } else {
      alert("no user found");
    }
  };
  return (
    <>
      <div className="login-container">
        <form onSubmit={handlelogin} className="login-form" action="">
          <span>Log in</span>
          <label htmlFor="">Email</label>
          <input ref={emailref} type="text" />
          <label htmlFor="">Password</label>
          <input ref={passres} type="text" />
          <button type="submit">Log in</button>
        </form>
        <div className="other-section">
          <Link to="/signup">New to our site</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
