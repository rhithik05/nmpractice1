import React, { useRef } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const emailref = useRef();
  const passref = useRef();
  const nameref = useRef();
  const a = useNavigate();

  const handleregister = (e) => {
    e.preventDefault();
    const Email = emailref.current.value;
    const pass = passref.current.value;
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[Email]) {
      alert("email already exists");
    } else {
      users[Email] = {
        username: nameref.current.value,
        password: pass,
      };
      localStorage.setItem("users", JSON.stringify(users));
      alert("registered successfully");
      a("/login");
    }
  };

  return (
    <>
      <div className="register-container">
        <form className="register-form" action="">
          <span>Register user</span>
          <label htmlFor="">Name</label>
          <input ref={nameref} type="text" />
          <label htmlFor="">Email</label>
          <input ref={emailref} type="text" />
          <label htmlFor="">Password</label>
          <input ref={passref} type="text" />
          <button onClick={handleregister}>Register</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
